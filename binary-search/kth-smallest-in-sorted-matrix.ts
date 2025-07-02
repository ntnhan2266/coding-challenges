/**
 * Problem: Kth Smallest Element in a Sorted Matrix
 * ------------------------------------------
 * Given an `n x n` matrix where each of the rows and columns is sorted in ascending order,
 * return the kth smallest element in the matrix.
 *
 * Note that it is the kth smallest element **in the entire matrix**, not just in a row or column.
 *
 * You must find a solution with a memory complexity better than O(n^2)
 * and with a runtime complexity better than O(n^2) in the worst case.
 * A binary search-based solution is expected.
 *
 * ------------------------------------------
 * Difficulty: Medium (LeetCode #378)
 *
 * ------------------------------------------
 * Input:
 * - matrix: number[][] (n x n matrix, 1 <= n <= 300)
 *           Each row and each column is sorted in non-decreasing order.
 * - k: number (1 <= k <= n^2)
 *
 * Output:
 * - number: the kth smallest element in the matrix
 *
 * ------------------------------------------
 * Example 1:
 * Input:  matrix = [[1,5,9],[10,11,13],[12,13,15]], k = 8
 * Output: 13
 *
 * Example 2:
 * Input:  matrix = [[-5]], k = 1
 * Output: -5
 */

function kthSmallest(matrix: number[][], k: number): number {
  const n = matrix.length;

  let left = matrix[0][0];
  let right = matrix[n - 1][n - 1];

  const countLessEqual = (mid: number): number => {
    let count = 0;
    let row = n - 1;
    let col = 0;

    while (row >= 0 && col < n) {
      if (matrix[row][col] <= mid) {
        count += row + 1;
        col++;
      } else {
        row--;
      }
    }

    return count;
  };

  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    const count = countLessEqual(mid);

    if (count < k) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return left;
}

// -------------------------
// Example Test Runs
// -------------------------
console.log(kthSmallest([[1, 5, 9], [10, 11, 13], [12, 13, 15]], 8)); // Expected: 13
console.log(kthSmallest([[-5]], 1));                                 // Expected: -5
console.log(kthSmallest([[1,2],[1,3]], 2));                          // Expected: 1
