/**
 * Problem: Unique Paths
 * ------------------------------------------
 * A robot is located at the top-left corner of an `m x n` grid. The robot can only move either down or right at any point in time.
 * Return the number of possible unique paths that the robot can take to reach the bottom-right corner.
 *
 * ------------------------------------------
 * Difficulty: Medium (LeetCode #62)
 *
 * ------------------------------------------
 * Input:
 * - m: number (1 <= m <= 100)
 * - n: number (1 <= n <= 100)
 *
 * Output:
 * - number: total number of unique paths from top-left to bottom-right
 *
 * ------------------------------------------
 * Example 1:
 * Input:  m = 3, n = 7
 * Output: 28
 *
 * Example 2:
 * Input:  m = 3, n = 2
 * Output: 3
 * Explanation: Paths: [Right, Down, Down], [Down, Down, Right], [Down, Right, Down]
 */

// Bottom-up dynamic programming approach
// dp[i][j] represents the number of unique paths to cell (i, j)
// Each cell can only be reached from the top or the left
// Time complexity: O(m * n), Space complexity: O(m * n)
function uniquePaths(m: number, n: number): number {
  const dp: number[][] = Array.from({ length: m }, () => new Array(n).fill(1));

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
    }
  }

  return dp[m - 1][n - 1];
}

// -------------------------
// Example Test Runs
// -------------------------

console.log(uniquePaths(3, 7)); // 28
console.log(uniquePaths(3, 2)); // 3
console.log(uniquePaths(1, 1)); // 1
console.log(uniquePaths(10, 10)); // 48620
