/**
 * Problem: Target Sum
 * ------------------------------------------
 * You are given an integer array `nums` and an integer `target`.
 * Assign '+' or '-' before each number in `nums` and compute the total expression.
 * Return the number of different expressions that evaluate to `target`.
 * 
 * ------------------------------------------
 * Difficulty: Medium (LeetCode #494)
 * 
 * ------------------------------------------
 * Constraints:
 * - 1 <= nums.length <= 20
 * - 0 <= nums[i] <= 1000
 * - 0 <= sum(nums) <= 1000
 */

function findTargetSumWays(nums: number[], target: number): number {
  const memo = new Map<string, number>();

  function dp(i: number, total: number): number {
    const key = `${i},${total}`;
    if (memo.has(key)) return memo.get(key)!;
    if (i === nums.length) return total === target ? 1 : 0;

    const add = dp(i + 1, total + nums[i]);
    const subtract = dp(i + 1, total - nums[i]);

    memo.set(key, add + subtract);
    return add + subtract;
  }

  return dp(0, 0);
}

// Test Case 1: Basic positive
console.log(findTargetSumWays([1,1,1,1,1], 3)); 
// Expected: 5

// Test Case 2: Zero included
console.log(findTargetSumWays([0,0,0,0,0,0,0,0,1], 1)); 
// Expected: 256

// Test Case 3: Negative target
console.log(findTargetSumWays([1,2,3,4,5], -3)); 
// Expected: 3

// Test Case 4: No way to reach target
console.log(findTargetSumWays([1000], -1000)); 
// Expected: 1

// Test Case 5: All zeros
console.log(findTargetSumWays([0,0,0,0], 0)); 
// Expected: 16
