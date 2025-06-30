/**
 * Problem: Decode Ways
 * ------------------------------------------
 * A message containing letters from A-Z can be encoded into numbers using the mapping:
 * 'A' -> "1", 'B' -> "2", ..., 'Z' -> "26"
 *
 * Given a string `s` containing only digits, return the total number of ways to decode it.
 * The input is guaranteed to be valid according to the rules above.
 *
 * ------------------------------------------
 * Difficulty: Medium (LeetCode #91)
 *
 * ------------------------------------------
 * Input:
 * - s: string (1 <= s.length <= 100, s contains only digits and no leading zeros unless it's "0")
 *
 * Output:
 * - number: total number of ways to decode the string
 *
 * ------------------------------------------
 * Example 1:
 * Input:  s = "12"
 * Output: 2
 * Explanation: "12" could be decoded as "AB" (1 2) or "L" (12)
 *
 * Example 2:
 * Input:  s = "226"
 * Output: 3
 * Explanation: "226" -> "BZ" (2 26), "VF" (22 6), or "BBF" (2 2 6)
 *
 * Example 3:
 * Input:  s = "06"
 * Output: 0
 * Explanation: "0" is not a valid encoding.
 */

// Dynamic Programming (Bottom-Up)
// dp[i] = number of ways to decode the first i characters
// Time complexity: O(n), Space complexity: O(n)
function numDecodings(s: string): number {
  const n = s.length;
  if (s[0] === '0') return 0;

  const dp = new Array(n + 1).fill(0);
  dp[0] = 1; // empty string
  dp[1] = 1; // first char is guaranteed not to be '0' due to check

  for (let i = 2; i <= n; i++) {
    const oneDigit = parseInt(s.slice(i - 1, i), 10);
    const twoDigit = parseInt(s.slice(i - 2, i), 10);

    if (oneDigit >= 1) dp[i] += dp[i - 1];
    if (twoDigit >= 10 && twoDigit <= 26) dp[i] += dp[i - 2];
  }

  return dp[n];
}

// Top-Down Dynamic Programming (Memoization)
function numDecodingsMemo(s: string): number {
  const memo: number[] = new Array(s.length).fill(-1);

  function helper(i: number): number {
    if (i === s.length) return 1; // reached the end
    if (s[i] === '0') return 0; // invalid encoding
    if (memo[i] !== -1) return memo[i]; // already computed
    let count = helper(i + 1); // decode one digit
    if (i + 1 < s.length) {
      const twoDigit = parseInt(s.slice(i, i + 2), 10);
      if (twoDigit >= 10 && twoDigit <= 26) {
        count += helper(i + 2); // decode two digits
      }
    }
    memo[i] = count; // store result in memo
    return count;
  }
  return helper(0);
}

// -------------------------
// Example Test Runs
// -------------------------

console.log(numDecodings("12"));   // 2
console.log(numDecodings("226"));  // 3
console.log(numDecodings("06"));   // 0
console.log(numDecodings("11106")); // 2
