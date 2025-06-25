/**
 * Problem: Coin Change
 * ------------------------------------------
 * You are given an integer array `coins` representing coin denominations
 * and an integer `amount` representing a total amount of money.
 *
 * Return the **fewest number of coins** that you need to make up that amount.
 * If that amount cannot be made up by any combination of the coins, return -1.
 * You may use an unlimited number of each coin.
 *
 * ------------------------------------------
 * Difficulty: Medium (LeetCode #322)
 *
 * ------------------------------------------
 * Input:
 * - coins: number[] (1 <= coins.length <= 12, 1 <= coins[i] <= 2^31 - 1)
 * - amount: number (0 <= amount <= 10^4)
 *
 * Output:
 * - number: minimum number of coins needed, or -1 if not possible
 *
 * ------------------------------------------
 * Example 1:
 * Input:  coins = [1,2,5], amount = 11
 * Output: 3
 * Explanation: 5 + 5 + 1 = 11
 *
 * Example 2:
 * Input:  coins = [2], amount = 3
 * Output: -1
 *
 * Example 3:
 * Input:  coins = [1], amount = 0
 * Output: 0
 */

function coinChange(coins: number[], amount: number): number {
  const dp = new Array(amount + 1).fill(Infinity);
  dp[0] = 0;

  for (let i = 1; i <= amount; i++) {
    for (const coin of coins) {
      if (i - coin >= 0) {
        dp[i] = Math.min(dp[i], dp[i - coin] + 1);
      }
    }
  }

  return dp[amount] === Infinity ? -1 : dp[amount];
}

// Top-down solution
function coinChangeTopDown(coins: number[], amount: number): number {
  const memo: number[] = new Array(amount + 1).fill(-1);

  function dp(remaining: number): number {
    if (remaining < 0) return Infinity; // Not possible
    if (remaining === 0) return 0; // Base case: no coins needed

    if (memo[remaining] !== -1) return memo[remaining]; // Return cached result

    let minCoins = Infinity;
    for (const coin of coins) {
      const res = dp(remaining - coin);
      if (res !== Infinity) {
        minCoins = Math.min(minCoins, res + 1);
      }
    }

    memo[remaining] = minCoins;
    return minCoins;
  }
  const result = dp(amount);
  return result === Infinity ? -1 : result;
}

// -------------------------
// Example Test Runs
// -------------------------

console.log(coinChange([1, 2, 5], 11)); // 3
console.log(coinChange([2], 3));        // -1
console.log(coinChange([1], 0));        // 0
console.log(coinChange([1, 3, 4], 6));  // 2 (3 + 3 or 2 + 4)
