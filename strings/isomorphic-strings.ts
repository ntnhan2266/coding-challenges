/**
 * Problem: Isomorphic Strings
 * ------------------------------------------
 * Given two strings `s` and `t`, determine if they are isomorphic.
 *
 * Two strings are isomorphic if the characters in `s` can be replaced to get `t`.
 * - Every occurrence of a character must be replaced with the same character.
 * - No two characters may map to the same character, but a character may map to itself.
 *
 * ------------------------------------------
 * Difficulty: Easy (LeetCode #205)
 *
 * ------------------------------------------
 * Input:
 * - s: string (1 <= s.length <= 5 * 10^4)
 * - t: string (1 <= t.length <= 5 * 10^4)
 *
 * Output:
 * - boolean: true if the strings are isomorphic, false otherwise
 *
 * ------------------------------------------
 * Example 1:
 * Input:  s = "egg", t = "add"
 * Output: true
 *
 * Example 2:
 * Input:  s = "foo", t = "bar"
 * Output: false
 *
 * Example 3:
 * Input:  s = "paper", t = "title"
 * Output: true
 */

function isIsomorphic(s: string, t: string): boolean {
  if (s.length !== t.length) return false;

  const mapST = new Map<string, string>();
  const mapTS = new Map<string, string>();

  for (let i = 0; i < s.length; i++) {
    const charS = s[i];
    const charT = t[i];

    if (mapST.has(charS) && mapST.get(charS) !== charT) return false;
    if (mapTS.has(charT) && mapTS.get(charT) !== charS) return false;

    mapST.set(charS, charT);
    mapTS.set(charT, charS);
  }

  return true;
}

// -------------------------
// Example Test Runs
// -------------------------
console.log(isIsomorphic("egg", "add"));       // Expected: true
console.log(isIsomorphic("foo", "bar"));       // Expected: false
console.log(isIsomorphic("paper", "title"));   // Expected: true
console.log(isIsomorphic("badc", "baba"));     // Expected: false
