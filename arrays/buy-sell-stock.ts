/**
 * Problem: Best Time to Buy and Sell Stock
 * ------------------------------------------
 * You are given an array `prices` where `prices[i]` is the price of a stock on the i-th day.
 * You want to buy on one day and sell on another later day to maximize your profit.
 * Return the maximum profit you can achieve. If no profit is possible, return 0.
 *
 * ------------------------------------------
 * Input:
 * - An integer array `prices` of length n (1 <= n <= 10^5)
 * - Each price: 0 <= prices[i] <= 10^4
 * 
 * Output:
 * - A single integer representing the maximum profit.
 *
 * ------------------------------------------
 * Example 1:
 * Input:  [7, 1, 5, 3, 6, 4]
 * Output: 5
 * Explanation: Buy at 1, sell at 6.
 *
 * Example 2:
 * Input:  [7, 6, 4, 3, 1]
 * Output: 0
 * Explanation: No profitable transaction possible.
 */

function maxProfit(prices: number[]): number {
  let minPrice = Infinity;
  let maxProfit = 0;

  for (const price of prices) {
    minPrice = Math.min(minPrice, price); // update minimum so far
    maxProfit = Math.max(maxProfit, price - minPrice); // check best profit so far
  }

  return maxProfit;
}

// -------------------------
// Example Test Runs
// -------------------------
console.log(maxProfit([7, 1, 5, 3, 6, 4])); // Expected: 5
console.log(maxProfit([7, 6, 4, 3, 1]));    // Expected: 0
