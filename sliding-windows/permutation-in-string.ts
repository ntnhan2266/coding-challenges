/**
 * Problem: Permutation in String
 * ------------------------------------------
 * Given two strings `s1` and `s2`, return true if `s2` contains a permutation of `s1`,
 * or false otherwise.
 *
 * In other words, return true if one of `s1`'s permutations is a substring of `s2`.
 *
 * ------------------------------------------
 * Difficulty: Medium (LeetCode #567)
 *
 * ------------------------------------------
 * Input:
 * - s1: string (1 <= s1.length <= 1000)
 * - s2: string (1 <= s2.length <= 10^4)
 *
 * Output:
 * - boolean: true if s2 contains any permutation of s1 as a substring
 *
 * ------------------------------------------
 * Example 1:
 * Input:  s1 = "ab", s2 = "eidbaooo"
 * Output: true   // "ba" is a permutation of "ab"
 *
 * Example 2:
 * Input:  s1 = "ab", s2 = "eidboaoo"
 * Output: false
 */

function checkInclusion(s1: string, s2: string): boolean {
  if (s1.length > s2.length) return false;

  const need = new Map<string, number>();
  const window = new Map<string, number>();

  // Build frequency map of s1
  for (const char of s1) {
    need.set(char, (need.get(char) || 0) + 1);
  }

  let left = 0;
  let right = 0;
  let valid = 0;

  while (right < s2.length) {
    const c = s2[right];
    right++;

    if (need.has(c)) {
      window.set(c, (window.get(c) || 0) + 1);
      if (window.get(c) === need.get(c)) {
        valid++;
      }
    }

    // Only check when window size matches s1 length
    while (right - left >= s1.length) {
      if (valid === need.size) return true;

      const d = s2[left];
      left++;

      if (need.has(d)) {
        if (window.get(d) === need.get(d)) {
          valid--;
        }
        window.set(d, window.get(d)! - 1);
      }
    }
  }

  return false;
}

// -------------------------
// Example Test Runs
// -------------------------
console.log(checkInclusion("ab", "eidbaooo"));  // Expected: true
console.log(checkInclusion("ab", "eidboaoo"));  // Expected: false
