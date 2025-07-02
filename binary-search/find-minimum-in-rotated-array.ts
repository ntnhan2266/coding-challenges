/**
 * Problem: Find Minimum in Rotated Sorted Array
 * ------------------------------------------
 * Suppose an array of length `n` sorted in ascending order is rotated between 1 and `n` times.
 * For example, the array [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2].
 *
 * Given the rotated sorted array `nums` of unique elements, return the minimum element of this array.
 * You must write an algorithm that runs in O(log n) time.
 *
 * ------------------------------------------
 * Difficulty: Medium (LeetCode #153)
 *
 * ------------------------------------------
 * Input:
 * - nums: number[] (1 <= nums.length <= 5000, -5000 <= nums[i] <= 5000)
 *         All values are unique, and `nums` is rotated at least once.
 *
 * Output:
 * - number: the minimum element in the rotated sorted array
 *
 * ------------------------------------------
 * Example 1:
 * Input:  nums = [3,4,5,1,2]
 * Output: 1
 *
 * Example 2:
 * Input:  nums = [4,5,6,7,0,1,2]
 * Output: 0
 *
 * Example 3:
 * Input:  nums = [11,13,15,17]
 * Output: 11
 */

function findMin(nums: number[]): number {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] > nums[right]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return nums[left];
}

// -------------------------
// Example Test Runs
// -------------------------
console.log(findMin([3, 4, 5, 1, 2]));       // Expected: 1
console.log(findMin([4, 5, 6, 7, 0, 1, 2])); // Expected: 0
console.log(findMin([11, 13, 15, 17]));      // Expected: 11
console.log(findMin([2, 1]));                // Expected: 1
