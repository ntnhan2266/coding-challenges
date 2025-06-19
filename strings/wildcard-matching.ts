/**
 * Problem: Wildcard Matching
 * --------------------------------------------------------
 * Given an input string `s` and a pattern `p`, implement wildcard pattern matching with support for:
 * - '?' matches any single character.
 * - '*' matches any sequence of characters (including the empty sequence).
 *
 * The matching should cover the entire input string (not partial).
 *
 * --------------------------------------------------------
 * Difficulty: Hard (LeetCode #44)
 *
 * --------------------------------------------------------
 * Input:
 * - s: string (1 <= s.length <= 2000)
 * - p: string (1 <= p.length <= 2000)
 *
 * Output:
 * - boolean: true if the pattern matches the string, false otherwise
 *
 * --------------------------------------------------------
 * Example 1:
 * Input:  s = "aa", p = "a"
 * Output: false
 *
 * Example 2:
 * Input:  s = "aa", p = "*"
 * Output: true
 *
 * Example 3:
 * Input:  s = "cb", p = "?a"
 * Output: false
 */

function isMatch(s: string, p: string): boolean {
  const m = s.length;
  const n = p.length;

  const dp: boolean[][] = Array.from({ length: m + 1 }, () => Array(n + 1).fill(false));
  dp[0][0] = true;

  for (let j = 1; j <= n; j++) {
    if (p[j - 1] === '*') {
      dp[0][j] = dp[0][j - 1];
    }
  }

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (p[j - 1] === '?' || s[i - 1] === p[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else if (p[j - 1] === '*') {
        dp[i][j] = dp[i][j - 1] || dp[i - 1][j];
      }
    }
  }

  return dp[m][n];
}

// -------------------------
// Example Test Runs
// -------------------------
console.log(isMatch("aa", "a"));      // Expected: false
console.log(isMatch("aa", "*"));      // Expected: true
console.log(isMatch("cb", "?a"));     // Expected: false
console.log(isMatch("adceb", "*a*b")); // Expected: true
console.log(isMatch("acdcb", "a*c?b")); // Expected: false
