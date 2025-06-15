/**
 * Problem: Two Sum
 * ------------------------------------------
 * Given an array of integers `nums` and an integer `target`,
 * return the indices of the two numbers such that they add up to the target.
 * You may assume that each input has exactly one solution, and you may not use the same element twice.
 *
 * ------------------------------------------
 * Input:
 * - nums: number[] (1 <= nums.length <= 10^4)
 * - target: number
 * 
 * Output:
 * - A tuple [i, j] such that nums[i] + nums[j] === target
 *
 * ------------------------------------------
 * Example 1:
 * Input:  nums = [2, 7, 11, 15], target = 9
 * Output: [0, 1]
 *
 * Example 2:
 * Input:  nums = [3, 2, 4], target = 6
 * Output: [1, 2]
 *
 * Example 3:
 * Input:  nums = [3, 3], target = 6
 * Output: [0, 1]
 */

function twoSum(nums: number[], target: number): [number, number] {
  const map = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (map.has(complement)) {
      return [map.get(complement)!, i];
    }

    map.set(nums[i], i);
  }

  return [-1, -1]; // If no solution found, though problem guarantees one exists
}

// -------------------------
// Example Test Runs
// -------------------------
console.log(twoSum([2, 7, 11, 15], 9)); // Expected: [0, 1]
console.log(twoSum([3, 2, 4], 6));      // Expected: [1, 2]
console.log(twoSum([3, 3], 6));         // Expected: [0, 1]
