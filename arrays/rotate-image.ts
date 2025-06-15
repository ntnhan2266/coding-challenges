/**
 * Problem: Rotate Image (Clockwise 90°)
 * ------------------------------------------
 * Given an n x n 2D matrix representing an image, rotate the image by 90 degrees clockwise in-place.
 * You must rotate the matrix in-place, which means you have to modify the input 2D matrix directly.
 * DO NOT allocate another 2D matrix.
 *
 * ------------------------------------------
 * Input:
 * - A 2D array `matrix` of integers with shape n x n (1 <= n <= 20)
 * 
 * Output:
 * - The matrix is modified in-place to be rotated 90° clockwise.
 *
 * ------------------------------------------
 * Example 1:
 * Input:
 *   matrix = [
 *     [1, 2, 3],
 *     [4, 5, 6],
 *     [7, 8, 9]
 *   ]
 * 
 * Output:
 *   matrix becomes:
 *   [
 *     [7, 4, 1],
 *     [8, 5, 2],
 *     [9, 6, 3]
 *   ]
 *
 * Example 2:
 * Input:
 *   matrix = [
 *     [5, 1, 9, 11],
 *     [2, 4, 8, 10],
 *     [13, 3, 6, 7],
 *     [15, 14, 12, 16]
 *   ]
 * 
 * Output:
 *   matrix becomes:
 *   [
 *     [15, 13, 2, 5],
 *     [14, 3, 4, 1],
 *     [12, 6, 8, 9],
 *     [16, 7, 10, 11]
 *   ]
 */
// Big-O: O(n^2) time complexity, O(1) space complexity
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

// Rote 90 counter-clockwise
function rotateCounterClockwise(matrix: number[][]): number[][] {
  const n = matrix.length;

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }

  matrix = matrix.reverse();

  return matrix;
}
// Example Test Run for Counter-Clockwise Rotation
const matrixCCW = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
rotateCounterClockwise(matrixCCW);
console.log(matrixCCW);
// Expected: [
//   [3, 6, 9],
//   [2, 5, 8],
//   [1, 4, 7]
