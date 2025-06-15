/**
 * Problem: Spiral Traversal of Matrix
 * ------------------------------------------
 * Given a 2D matrix of size m x n, return all elements of the matrix in spiral order.
 *
 * ------------------------------------------
 * Input:
 * - A 2D array `matrix` with dimensions m x n (1 <= m, n <= 10^4)
 * 
 * Output:
 * - A single array containing the matrix elements in clockwise spiral order.
 *
 * ------------------------------------------
 * Example 1:
 * Input:
 *   [
 *     [1, 2, 3],
 *     [4, 5, 6],
 *     [7, 8, 9]
 *   ]
 * Output: [1, 2, 3, 6, 9, 8, 7, 4, 5]
 *
 * Example 2:
 * Input:
 *   [
 *     [1, 2, 3, 4],
 *     [5, 6, 7, 8],
 *     [9,10,11,12]
 *   ]
 * Output: [1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7]
 */

function spiralOrder(matrix: number[][]): number[] {
  const result: number[] = [];

  if (matrix.length === 0) return result;

  let top = 0;
  let bottom = matrix.length - 1;
  let left = 0;
  let right = matrix[0].length - 1;

  while (top <= bottom && left <= right) {
    // Traverse from Left to Right
    for (let i = left; i <= right; i++) {
      result.push(matrix[top][i]);
    }
    top++;

    // Traverse from Top to Bottom
    for (let i = top; i <= bottom; i++) {
      result.push(matrix[i][right]);
    }
    right--;

    // Traverse from Right to Left (if rows remain)
    if (top <= bottom) {
      for (let i = right; i >= left; i--) {
        result.push(matrix[bottom][i]);
      }
      bottom--;
    }

    // Traverse from Bottom to Top (if cols remain)
    if (left <= right) {
      for (let i = bottom; i >= top; i--) {
        result.push(matrix[i][left]);
      }
      left++;
    }
  }

  return result;
}

// -------------------------
// Example Test Runs
// -------------------------
console.log(spiralOrder([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
])); // Expected: [1, 2, 3, 6, 9, 8, 7, 4, 5]

console.log(spiralOrder([
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9,10,11,12]
])); // Expected: [1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7]
