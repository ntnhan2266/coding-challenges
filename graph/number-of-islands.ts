/**
 * Problem: Number of Islands
 * ------------------------------------------
 * Given a 2D grid map of '1's (land) and '0's (water),
 * count the number of islands. An island is surrounded by water
 * and is formed by connecting adjacent lands horizontally or vertically.
 * You may assume all four edges of the grid are surrounded by water.
 *
 * ------------------------------------------
 * Difficulty: Medium (LeetCode #200)
 *
 * ------------------------------------------
 * Input:
 * - grid: string[][] (m x n grid, 1 <= m, n <= 300)
 *         '1' represents land and '0' represents water.
 *
 * Output:
 * - number: number of islands in the grid
 *
 * ------------------------------------------
 * Example 1:
 * Input:  grid = [
 *           ["1","1","1","1","0"],
 *           ["1","1","0","1","0"],
 *           ["1","1","0","0","0"],
 *           ["0","0","0","0","0"]
 *         ]
 * Output: 1
 *
 * Example 2:
 * Input:  grid = [
 *           ["1","1","0","0","0"],
 *           ["1","1","0","0","0"],
 *           ["0","0","1","0","0"],
 *           ["0","0","0","1","1"]
 *         ]
 * Output: 3
 */

function numIslands(grid: string[][]): number {
  const m = grid.length;
  const n = grid[0].length;
  let count = 0;

  const dfs = (i: number, j: number) => {
    if (i < 0 || j < 0 || i >= m || j >= n || grid[i][j] === '0') return;

    grid[i][j] = '0'; // mark as visited

    dfs(i + 1, j); // down
    dfs(i - 1, j); // up
    dfs(i, j + 1); // right
    dfs(i, j - 1); // left
  };

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === '1') {
        count++;
        dfs(i, j);
      }
    }
  }

  return count;
}

// -------------------------
// Example Test Runs
// -------------------------
console.log(numIslands([
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
])); // Expected: 1

console.log(numIslands([
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
])); // Expected: 3
