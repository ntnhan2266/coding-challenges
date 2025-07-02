/**
 * Problem: Binary Search
 * ------------------------------------------
 * Given an array of integers `nums` which is sorted in ascending order,
 * and an integer `target`, return the index of `target` if it is in the array.
 * If not, return -1.
 *
 * You must write an algorithm with O(log n) runtime complexity.
 *
 * ------------------------------------------
 * Difficulty: Easy (LeetCode #704)
 *
 * ------------------------------------------
 * Input:
 * - nums: number[] (1 <= nums.length <= 10^4, -10^4 < nums[i] < 10^4)
 *         All elements in `nums` are unique and sorted in ascending order.
 * - target: number (-10^4 < target < 10^4)
 *
 * Output:
 * - number: index of target in nums if found; otherwise -1
 *
 * ------------------------------------------
 * Example 1:
 * Input:  nums = [-1,0,3,5,9,12], target = 9
 * Output: 4
 * Explanation: 9 exists in nums and its index is 4
 *
 * Example 2:
 * Input:  nums = [-1,0,3,5,9,12], target = 2
 * Output: -1
 * Explanation: 2 does not exist in nums so return -1
 */

function binarySearch(nums: number[], target: number): number {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) return mid;
    if (nums[mid] < target) left = mid + 1;
    else right = mid - 1;
  }

  return -1;
}

// -------------------------
// Example Test Runs
// -------------------------
console.log(binarySearch([-1, 0, 3, 5, 9, 12], 9));  // Expected: 4
console.log(binarySearch([-1, 0, 3, 5, 9, 12], 2));  // Expected: -1
console.log(binarySearch([1, 3, 5, 7], 1));          // Expected: 0
console.log(binarySearch([1, 3, 5, 7], 7));          // Expected: 3
