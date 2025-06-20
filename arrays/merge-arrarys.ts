/**
 * Problem: Merge Sorted Array
 * ------------------------------------------
 * You are given two integer arrays `nums1` and `nums2`, sorted in non-decreasing order,
 * and two integers `m` and `n` representing the number of initialized elements in `nums1` and `nums2` respectively.
 *
 * Merge `nums2` into `nums1` as one sorted array in-place. Do not return a new array.
 *
 * `nums1` has a length of `m + n`, where the last `n` elements are unused space to accommodate `nums2`.
 *
 * ------------------------------------------
 * Difficulty: Easy (LeetCode #88)
 *
 * ------------------------------------------
 * Input:
 * - nums1: number[] (length = m + n, first m elements are valid)
 * - m: number (0 <= m <= nums1.length)
 * - nums2: number[] (length = n)
 * - n: number (0 <= n <= nums2.length)
 *
 * Output:
 * - void: modifies `nums1` in-place to be the merged sorted array
 *
 * ------------------------------------------
 * Example 1:
 * Input:  nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
 * Output: nums1 = [1,2,2,3,5,6]
 *
 * Example 2:
 * Input:  nums1 = [1], m = 1, nums2 = [], n = 0
 * Output: nums1 = [1]
 *
 * Example 3:
 * Input:  nums1 = [0], m = 0, nums2 = [1], n = 1
 * Output: nums1 = [1]
 */

function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let i = m - 1;
  let j = n - 1;
  let k = m + n - 1;

  // Merge from the back
  while (i >= 0 && j >= 0) {
    if (nums1[i] > nums2[j]) {
      nums1[k--] = nums1[i--];
    } else {
      nums1[k--] = nums2[j--];
    }
  }

  // Copy remaining elements from nums2 (if any)
  while (j >= 0) {
    nums1[k--] = nums2[j--];
  }
}

// -------------------------
// Example Test Runs
// -------------------------
const nums1a = [1,2,3,0,0,0];
merge(nums1a, 3, [2,5,6], 3);
console.log(nums1a); // Expected: [1,2,2,3,5,6]

const nums1b = [1];
merge(nums1b, 1, [], 0);
console.log(nums1b); // Expected: [1]

const nums1c = [0];
merge(nums1c, 0, [1], 1);
console.log(nums1c); // Expected: [1]
