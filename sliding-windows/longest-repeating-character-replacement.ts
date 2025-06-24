/**
 * Problem: Longest Repeating Character Replacement
 * ------------------------------------------
 * Given a string `s` and an integer `k`, you can choose any character in `s` and change it
 * to any other uppercase English character at most `k` times.
 *
 * Return the length of the longest substring containing the same letter after performing
 * at most `k` character replacements.
 *
 * ------------------------------------------
 * Difficulty: Medium (LeetCode #424)
 *
 * ------------------------------------------
 * Input:
 * - s: string (1 <= s.length <= 10^5, only uppercase A–Z)
 * - k: number (0 <= k <= s.length)
 *
 * Output:
 * - number: length of the longest valid substring
 *
 * ------------------------------------------
 * Example 1:
 * Input:  s = "ABAB", k = 2
 * Output: 4  // Replace both 'A' to 'B' or both 'B' to 'A'
 *
 * Example 2:
 * Input:  s = "AABABBA", k = 1
 * Output: 4  // Replace the second 'B' to 'A' → "AAAABA"
 */

function characterReplacement(s: string, k: number): number {
  const freq: number[] = new Array(26).fill(0);
  let maxCount = 0;
  let left = 0;
  let result = 0;

  for (let right = 0; right < s.length; right++) {
    const index = s.charCodeAt(right) - 65; // 'A'.charCodeAt(0) = 65
    freq[index]++;
    maxCount = Math.max(maxCount, freq[index]);

    // if more than k characters need to be changed, shrink window
    if (right - left + 1 - maxCount > k) {
      const leftIndex = s.charCodeAt(left) - 65;
      freq[leftIndex]--;
      left++;
    }

    result = Math.max(result, right - left + 1);
  }

  return result;
}

// -------------------------
// Example Test Runs
// -------------------------
console.log(characterReplacement("ABAB", 2));       // Expected: 4
console.log(characterReplacement("AABABBA", 1));    // Expected: 4
console.log(characterReplacement("ABCCCA", 2));     // Expected: 5  // Replace 'B' and one 'C' to 'A' → "AAACCA"
console.log(characterReplacement("A", 0));          // Expected: 1  // Single character, no replacements needed
console.log(characterReplacement("AAABBB", 3));     // Expected: 6  // Replace all 'B's to 'A's or vice versa
