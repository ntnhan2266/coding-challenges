/**
 * Problem: Longest Substring Without Repeating Characters
 * ------------------------------------------
 * Given a string `s`, find the length of the longest substring without repeating characters.
 *
 * ------------------------------------------
 * Difficulty: Medium (LeetCode #3)
 *
 * ------------------------------------------
 * Input:
 * - s: string (0 <= s.length <= 5 * 10^4)
 *
 * Output:
 * - number: length of the longest substring without repeating characters
 *
 * ------------------------------------------
 * Example 1:
 * Input:  s = "abcabcbb"
 * Output: 3  // "abc"
 *
 * Example 2:
 * Input:  s = "bbbbb"
 * Output: 1  // "b"
 *
 * Example 3:
 * Input:  s = "pwwkew"
 * Output: 3  // "wke"
 */

function lengthOfLongestSubstring(s: string): number {
  const seen = new Set<string>();
  let left = 0;
  let maxLen = 0;

  for (let right = 0; right < s.length; right++) {
    const c = s[right];
    while (seen.has(c)) {
      seen.delete(s[left]);
      left = left + 1;
    }
    seen.add(c);
    maxLen = Math.max(right - left + 1, maxLen);
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
