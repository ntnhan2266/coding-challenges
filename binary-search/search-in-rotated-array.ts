/**
 * Problem: Search in Rotated Sorted Array
 * ------------------------------------------
 * There is an integer array `nums` sorted in ascending order (with distinct values),
 * which is rotated at an unknown pivot index `k` (0 <= k < nums.length)
 * such that the resulting array is [nums[k], ..., nums[n - 1], nums[0], ..., nums[k - 1]].
 *
 * Given the array `nums` after the rotation and an integer `target`, return the index of `target`
 * if it is in `nums`, or -1 if it is not in `nums`.
 *
 * You must write an algorithm with O(log n) runtime complexity.
 *
 * ------------------------------------------
 * Difficulty: Medium (LeetCode #33)
 *
 * ------------------------------------------
 * Input:
 * - nums: number[] (1 <= nums.length <= 5000, -10^4 <= nums[i] <= 10^4)
 *         All elements are unique and the array is rotated.
 * - target: number (-10^4 <= target <= 10^4)
 *
 * Output:
 * - number: index of `target` in `nums` if found; otherwise -1
 *
 * ------------------------------------------
 * Example 1:
 * Input:  nums = [4,5,6,7,0,1,2], target = 0
 * Output: 4
 *
 * Example 2:
 * Input:  nums = [4,5,6,7,0,1,2], target = 3
 * Output: -1
 *
 * Example 3:
 * Input:  nums = [1], target = 0
 * Output: -1
 */

function search(nums: number[], target: number): number {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) return mid;

    // Left half is sorted
    if (nums[left] <= nums[mid]) {
      if (nums[left] <= target && target < nums[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
    // Right half is sorted
    else {
      if (nums[mid] < target && target <= nums[right]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }

  return -1;
}

// -------------------------
// Example Test Runs
// -------------------------
console.log(search([4, 5, 6, 7, 0, 1, 2], 0)); // Expected: 4
console.log(search([4, 5, 6, 7, 0, 1, 2], 3)); // Expected: -1
console.log(search([1], 0));                  // Expected: -1
console.log(search([1, 3], 3));               // Expected: 1
console.log(search([5, 1, 3], 5));             // Expected: 0
