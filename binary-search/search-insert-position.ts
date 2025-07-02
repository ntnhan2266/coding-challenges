/**
 * Problem: Search Insert Position
 * ------------------------------------------
 * Given a sorted array of distinct integers `nums` and a target value `target`,
 * return the index if the target is found. If not, return the index where it
 * would be if it were inserted in order.
 *
 * You must write an algorithm with O(log n) runtime complexity.
 *
 * ------------------------------------------
 * Difficulty: Easy (LeetCode #35)
 *
 * ------------------------------------------
 * Input:
 * - nums: number[] (1 <= nums.length <= 10^4, -10^4 < nums[i] < 10^4)
 *         Sorted in ascending order with no duplicates.
 * - target: number (-10^4 <= target <= 10^4)
 *
 * Output:
 * - number: the index of target if found; otherwise the insert position
 *
 * ------------------------------------------
 * Example 1:
 * Input:  nums = [1,3,5,6], target = 5
 * Output: 2
 *
 * Example 2:
 * Input:  nums = [1,3,5,6], target = 2
 * Output: 1
 *
 * Example 3:
 * Input:  nums = [1,3,5,6], target = 7
 * Output: 4
 */

function searchInsert(nums: number[], target: number): number {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) return mid;
    if (nums[mid] < target) left = mid + 1;
    else right = mid - 1;
  }

  return left;
}

// -------------------------
// Example Test Runs
// -------------------------
console.log(searchInsert([1, 3, 5, 6], 5)); // Expected: 2
console.log(searchInsert([1, 3, 5, 6], 2)); // Expected: 1
console.log(searchInsert([1, 3, 5, 6], 7)); // Expected: 4
console.log(searchInsert([1, 3, 5, 6], 0)); // Expected: 0
