/**
 * Problem: Partition Equal Subset Sum
 * ------------------------------------------
 * Given a non-empty array `nums` containing only positive integers,
 * determine if the array can be partitioned into two subsets such that the sum of elements
 * in both subsets is equal.
 *
 * ------------------------------------------
 * Difficulty: Medium (LeetCode #416)
 *
 * ------------------------------------------
 * Input:
 * - nums: number[] (1 <= nums.length <= 200, 1 <= nums[i] <= 100)
 *
 * Output:
 * - boolean: true if array can be partitioned into two subsets with equal sum, false otherwise
 *
 * ------------------------------------------
 * Example 1:
 * Input:  nums = [1, 5, 11, 5]
 * Output: true
 * Explanation: The array can be partitioned as [1, 5, 5] and [11]
 *
 * Example 2:
 * Input:  nums = [1, 2, 3, 5]
 * Output: false
 */

// Bottom-up Dynamic Programming
// This is a 0/1 knapsack problem variant
// We want to find if there's a subset of nums that sums to target = totalSum / 2
// Time complexity: O(n * target), Space complexity: O(target)
function canPartition(nums: number[]): boolean {
  const totalSum = nums.reduce((acc, num) => acc + num, 0);

  if (totalSum % 2 !== 0) return false; // Can't split odd total sum
  const target = totalSum / 2;

  const dp = new Array(target + 1).fill(false);
  dp[0] = true; // base case: zero sum is always possible

  for (const num of nums) {
    for (let j = target; j >= num; j--) {
      dp[j] = dp[j] || dp[j - num];
    }
  }

  return dp[target];
}

// -------------------------
// Example Test Runs
// -------------------------

console.log(canPartition([1, 5, 11, 5])); // true
console.log(canPartition([1, 2, 3, 5]));  // false
console.log(canPartition([2, 2, 1, 1]));  // true
console.log(canPartition([1, 2, 5]));     // false
