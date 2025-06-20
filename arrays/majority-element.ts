/**
 * Problem: Majority Element
 * ------------------------------------------
 * Given an array `nums` of size `n`, return the majority element.
 * The majority element is the element that appears more than ⌊n / 2⌋ times.
 *
 * You may assume that the majority element always exists in the array.
 *
 * ------------------------------------------
 * Difficulty: Easy (LeetCode #169)
 *
 * ------------------------------------------
 * Input:
 * - nums: number[] (1 <= nums.length <= 5 * 10^4)
 *
 * Output:
 * - number: the majority element
 *
 * ------------------------------------------
 * Example 1:
 * Input:  nums = [3,2,3]
 * Output: 3
 *
 * Example 2:
 * Input:  nums = [2,2,1,1,1,2,2]
 * Output: 2
 */

function majorityElement(nums: number[]): number {
  let result = nums[0];
  let count = 1;

  for (let i = 1; i < nums.length; i++) {
    if (count === 0) {
      result = nums[i];
    }
    count += (nums[i] === result) ? 1 : -1;
  }

  return result;
}

// -------------------------
// Example Test Runs
// -------------------------
console.log(majorityElement([3, 2, 3]));         // Expected: 3
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2])); // Expected: 2
console.log(majorityElement([1]));             // Expected: 1
