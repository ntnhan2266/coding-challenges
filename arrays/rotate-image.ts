/**
 * Problem: Rotate Image
 * ------------------------------------------
 * You are given an n x n 2D matrix representing an image. Rotate the image by 90 degrees (clockwise).
 * You must rotate the image in-place, which means you have to modify the input 2D matrix directly.
 *
 * ------------------------------------------
 * Input:
 * - matrix: number[][] => An n x n 2D matrix (1 <= n <= 20)
 *
 * Output:
 * - The same matrix rotated 90 degrees clockwise in-place.
 *
 * ------------------------------------------
 * Example:
 * Input:
 *   [
 *     [1, 2, 3],
 *     [4, 5, 6],
 *     [7, 8, 9]
 *   ]
 *
 * Output:
 *   [
 *     [7, 4, 1],
 *     [8, 5, 2],
 *     [9, 6, 3]
 *   ]
 */
function rotate(matrix: number[][]): void {
  const n = matrix.length;

  // Step 1: Transpose the matrix (swap rows with columns)
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }

  // Step 2: Reverse each row
  for (let row of matrix) {
    row.reverse();
  }
}

// -------------------------
// Example Test Run
// -------------------------
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

rotate(matrix);
console.log(matrix); 
// Expected: [
//   [7, 4, 1],
//   [8, 5, 2],
//   [9, 6, 3]
// ]
