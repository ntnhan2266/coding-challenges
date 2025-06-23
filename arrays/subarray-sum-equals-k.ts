/**
 * Problem: Subarray Sum Equals K
 * ------------------------------------------
 * Given an integer array `nums` and an integer `k`, return the total number of continuous subarrays 
 * whose sum equals to `k`.
 *
 * ------------------------------------------
 * Difficulty: Medium (LeetCode #560)
 *
 * ------------------------------------------
 * Input:
 * - nums: number[] (1 <= nums.length <= 2 * 10^4)
 * - k: number (-10^9 <= k <= 10^9)
 *
 * Output:
 * - number: count of subarrays whose sum equals `k`
 *
 * ------------------------------------------
 * Example 1:
 * Input:  nums = [1,1,1], k = 2
 * Output: 2
 *
 * Example 2:
 * Input:  nums = [1,2,3], k = 3
 * Output: 2
 */

function subarraySum(nums: number[], k: number): number {
  const prefixSumCount = new Map<number, number>();
  prefixSumCount.set(0, 1); // base case: empty prefix

  let sum = 0;
  let count = 0;

  for (const num of nums) {
    sum += num;

    if (prefixSumCount.has(sum - k)) {
      count += prefixSumCount.get(sum - k)!;
    }

    prefixSumCount.set(sum, (prefixSumCount.get(sum) || 0) + 1);
  }

  return count;
}

// -------------------------
// Example Test Runs
// -------------------------
console.log(subarraySum([1, 1, 1], 2)); // Expected: 2
console.log(subarraySum([1, 2, 3], 3)); // Expected: 2
console.log(subarraySum([1, -1, 0], 0)); // Expected: 3
