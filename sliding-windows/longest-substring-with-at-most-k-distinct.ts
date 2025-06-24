/**
 * Problem: Longest Substring with At Most K Distinct Characters
 * ------------------------------------------
 * Given a string `s` and an integer `k`, return the length of the longest substring
 * that contains at most `k` distinct characters.
 *
 * ------------------------------------------
 * Difficulty: Medium (LeetCode #340)
 *
 * ------------------------------------------
 * Input:
 * - s: string (1 <= s.length <= 5 * 10^4)
 * - k: number (1 <= k <= 5 * 10^4)
 *
 * Output:
 * - number: length of the longest valid substring
 *
 * ------------------------------------------
 * Example 1:
 * Input:  s = "eceba", k = 2
 * Output: 3   // "ece"
 *
 * Example 2:
 * Input:  s = "aa", k = 1
 * Output: 2
 */

function lengthOfLongestSubstringKDistinct(s: string, k: number): number {
  if (k === 0 || s.length === 0) return 0;

  const window = new Map<string, number>();
  let left = 0;
  let maxLen = 0;

  for (let right = 0; right < s.length; right++) {
    const c = s[right];
    window.set(c, (window.get(c) || 0) + 1);

    // Shrink window if distinct count > k
    while (window.size > k) {
      const leftChar = s[left];
      window.set(leftChar, window.get(leftChar)! - 1);
      if (window.get(leftChar) === 0) {
        window.delete(leftChar);
      }
      left++;
    }

    maxLen = Math.max(maxLen, right - left + 1);
  }

  return maxLen;
}

// -------------------------
// Example Test Runs
// -------------------------
console.log(lengthOfLongestSubstringKDistinct("eceba", 2)); // Expected: 3
console.log(lengthOfLongestSubstringKDistinct("aa", 1));    // Expected: 2
console.log(lengthOfLongestSubstringKDistinct("aabbcc", 2)); // Expected: 4
console.log(lengthOfLongestSubstringKDistinct("abcabcabc", 2)); // Expected: 2
console.log(lengthOfLongestSubstringKDistinct("abacabadabacaba", 3)); // Expected: 7
console.log(lengthOfLongestSubstringKDistinct("", 1)); // Expected: 0
