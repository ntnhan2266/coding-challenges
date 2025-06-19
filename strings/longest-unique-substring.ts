/**
 * Problem: Longest Substring Without Repeating Characters
 * --------------------------------------------------------
 * Given a string `s`, find the length of the longest substring without repeating characters.
 *
 * --------------------------------------------------------
 * Difficulty: Medium (LeetCode #3)
 *
 * --------------------------------------------------------
 * Input:
 * - s: string (0 <= s.length <= 5 * 10^4)
 *
 * Output:
 * - number: length of the longest substring with all unique characters
 *
 * --------------------------------------------------------
 * Example 1:
 * Input:  "abcabcbb"
 * Output: 3  // "abc"
 *
 * Example 2:
 * Input:  "bbbbb"
 * Output: 1  // "b"
 *
 * Example 3:
 * Input:  "pwwkew"
 * Output: 3  // "wke"
 */

function lengthOfLongestSubstring(s: string): number {
  const seen = new Map<string, number>();
  let left = 0;
  let maxLen = 0;

  for (let right = 0; right < s.length; right++) {
    const char = s[right];

    if (seen.has(char) && seen.get(char)! >= left) {
      left = seen.get(char)! + 1;
    }

    seen.set(char, right);
    maxLen = Math.max(maxLen, right - left + 1);
  }

  return maxLen;
}

// -------------------------
// Example Test Runs
// -------------------------
console.log(lengthOfLongestSubstring("abcabcbb")); // Expected: 3
console.log(lengthOfLongestSubstring("bbbbb"));    // Expected: 1
console.log(lengthOfLongestSubstring("pwwkew"));   // Expected: 3
console.log(lengthOfLongestSubstring(""));         // Expected: 0
