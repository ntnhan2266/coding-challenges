/**
 * Problem: House Robber
 * ------------------------------------------
 * You are a professional robber planning to rob houses along a street.
 * Each house has a certain amount of money stashed, and adjacent houses
 * have security systems connected — so you can't rob two adjacent houses.
 *
 * Return the maximum amount of money you can rob tonight without alerting the police.
 *
 * ------------------------------------------
 * Difficulty: Medium (LeetCode #198)
 *
 * ------------------------------------------
 * Input:
 * - nums: number[] (0 <= nums.length <= 100, 0 <= nums[i] <= 400)
 *
 * Output:
 * - number: the maximum amount of money you can rob
 *
 * ------------------------------------------
 * Example 1:
 * Input:  nums = [1,2,3,1]
 * Output: 4
 * Explanation: Rob house 1 (money = 1) and house 3 (money = 3)
 * Total = 1 + 3 = 4
 *
 * Example 2:
 * Input:  nums = [2,7,9,3,1]
 * Output: 12
 * Explanation: Rob house 1 (2), house 3 (9), and house 5 (1)
 * Total = 2 + 9 + 1 = 12
 */

function rob(nums: number[]): number {
  if (nums.length === 0) return 0;
  if (nums.length === 1) return nums[0];

  let twoHousesAgo = nums[0];
  let oneHouseAgo = Math.max(nums[0], nums[1]);

  for (let i = 2; i < nums.length; i++) {
    const current = Math.max(oneHouseAgo, twoHousesAgo + nums[i]);
    twoHousesAgo = oneHouseAgo;
    oneHouseAgo = current;
  }

  return oneHouseAgo;
}
// Top-bottom dynamic programming solution
function robTopDown(nums: number[]): number {
  const memo: number[] = new Array(nums.length).fill(-1);
  function dp(i: number): number {
    if (i < 0) return 0;
    if (memo[i] !== -1) return memo[i];

    const robCurrent = nums[i] + dp(i - 2);
    const skipCurrent = dp(i - 1);
    memo[i] = Math.max(robCurrent, skipCurrent);
    return memo[i];
  }
  return dp(nums.length - 1);
}

// -------------------------
// Example Test Runs
// -------------------------

console.log(rob([1, 2, 3, 1]));     // 4
console.log(rob([2, 7, 9, 3, 1]));  // 12
console.log(rob([2, 1, 1, 2]));     // 4
console.log(rob([5]));              // 5
console.log(rob([]));               // 0
