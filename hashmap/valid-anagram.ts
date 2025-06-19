/**
 * Problem: Valid Anagram
 * --------------------------------------------------------
 * Given two strings `s` and `t`, return true if `t` is an anagram of `s`, and false otherwise.
 *
 * An anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
 * using all the original letters exactly once.
 *
 * --------------------------------------------------------
 * Difficulty: Easy (LeetCode #242)
 *
 * --------------------------------------------------------
 * Input:
 * - s: string (1 <= s.length <= 5 * 10^4)
 * - t: string (1 <= t.length <= 5 * 10^4)
 *
 * Output:
 * - boolean: whether `t` is an anagram of `s`
 *
 * --------------------------------------------------------
 * Example 1:
 * Input:  s = "anagram", t = "nagaram"
 * Output: true
 *
 * Example 2:
 * Input:  s = "rat", t = "car"
 * Output: false
 */

function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false;

  const count: Record<string, number> = {};

  for (const c of s) {
    count[c] = (count[c] || 0) + 1;
  }

  for (const c of t) {
    if (!count[c]) return false;
    count[c]--;
  }

  return true;
}

// -------------------------
// Example Test Runs
// -------------------------
console.log(isAnagram("anagram", "nagaram")); // Expected: true
console.log(isAnagram("rat", "car"));          // Expected: false
console.log(isAnagram("aacc", "ccac"));        // Expected: false
