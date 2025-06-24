/**
 * Problem: Grumpy Bookstore Owner
 * ------------------------------------------
 * A bookstore owner is sometimes grumpy. Customers come and go during `customers[i]` minutes.
 * If the owner is grumpy at time `i`, all `customers[i]` are unhappy.
 * The owner can choose a window of `minutes` length to suppress their grumpiness (once).
 *
 * Return the maximum number of customers that can be satisfied.
 *
 * ------------------------------------------
 * Difficulty: Medium (LeetCode #1052)
 *
 * ------------------------------------------
 * Input:
 * - customers: number[] (1 <= customers.length <= 20,000, 0 <= customers[i] <= 1000)
 * - grumpy: number[] (same length, 0 or 1 where 1 = grumpy)
 * - minutes: number (1 <= minutes <= customers.length)
 *
 * Output:
 * - number: maximum number of satisfied customers
 *
 * ------------------------------------------
 * Example:
 * Input:  customers = [1,0,1,2,1,1,7,5], grumpy = [0,1,0,1,0,1,0,1], minutes = 3
 * Output: 16
 *
 * Explanation:
 * - Always satisfied: [0] + [2] + [4] + [6] = 1 + 1 + 1 + 7 = 10
 * - Best window to suppress grumpiness = [5,6,7] → adds [1 + 7 + 5] = 13
 *   But 7 is already not grumpy → Only gain 1 (at 5) + 5 (at 7) = 6
 * - Better window: [1,2,3] → gain = 0 + 1 (already satisfied) + 2 = 2
 * - Best window is [5,6,7] for net gain = 6
 * - Total = 10 (always satisfied) + 6 (from window) = 16
 */

function maxSatisfied(customers: number[], grumpy: number[], minutes: number): number {
  let baseSatisfied = 0;

  for (let i = 0; i < customers.length; i++) {
    if (grumpy[i] === 0) {
      baseSatisfied += customers[i];
    }
  }

  let maxGain = 0;
  let gain = 0;

  for (let i = 0; i < customers.length; i++) {
    if (grumpy[i] === 1) {
      gain += customers[i];
    }

    if (i >= minutes) {
      if (grumpy[i - minutes] === 1) {
        gain -= customers[i - minutes];
      }
    }

    maxGain = Math.max(maxGain, gain);
  }

  return baseSatisfied + maxGain;
}

// -------------------------
// Example Test Run
// -------------------------
console.log(maxSatisfied(
  [1, 0, 1, 2, 1, 1, 7, 5],
  [0, 1, 0, 1, 0, 1, 0, 1],
  3
)); // Expected: 16
// -------------------------
// Additional test cases
console.log(maxSatisfied(
  [10, 1, 10, 1, 10],
  [1, 0, 1, 0, 1],
  2
)); // Expected: 31
