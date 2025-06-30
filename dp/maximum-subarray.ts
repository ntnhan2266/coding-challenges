/**
 * Problem: Maximum Subarray
 * ------------------------------------------
 * Given an integer array `nums`, find the contiguous subarray 
 * (containing at least one number) which has the largest sum 
 * and return its sum.
 *
 * ------------------------------------------
 * Difficulty: Medium (LeetCode #53)
 *
 * ------------------------------------------
 * Input:
 * - nums: number[] (1 <= nums.length <= 10⁵, -10⁴ <= nums[i] <= 10⁴)
 *
 * Output:
 * - number: the largest possible sum of a contiguous subarray
 *
 * ------------------------------------------
 * Example 1:
 * Input:  nums = [-2,1,-3,4,-1,2,1,-5,4]
 * Output: 6
 * Explanation: The subarray [4,-1,2,1] has the largest sum = 6.
 *
 * Example 2:
 * Input:  nums = [1]
 * Output: 1
 *
 * Example 3:
 * Input:  nums = [5,4,-1,7,8]
 * Output: 23
 */

// Kadane’s Algorithm (Dynamic Programming Approach)
// This algorithm maintains the maximum sum of a subarray ending at each position.
// At each step, it decides whether to extend the previous subarray or start a new one.
// Time complexity: O(n), space complexity: O(1)
function maxSubArray(nums: number[]): number {
  let maxSoFar = nums[0];
  let currentSum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    // Either extend the previous subarray or start a new one from current
    currentSum = Math.max(nums[i], currentSum + nums[i]);
    maxSoFar = Math.max(maxSoFar, currentSum);
  }

  return maxSoFar;
}

// -------------------------
// Example Test Runs
// -------------------------

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // 6
console.log(maxSubArray([1])); // 1
console.log(maxSubArray([5, 4, -1, 7, 8])); // 23
