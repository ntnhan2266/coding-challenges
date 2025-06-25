/**
 * Problem: Climbing Stairs
 * ------------------------------------------
 * You are climbing a staircase. It takes `n` steps to reach the top.
 * Each time you can either climb 1 or 2 steps.
 *
 * In how many distinct ways can you climb to the top?
 *
 * ------------------------------------------
 * Difficulty: Easy (LeetCode #70)
 *
 * ------------------------------------------
 * Input:
 * - n: number (1 <= n <= 45)
 *
 * Output:
 * - number: total number of distinct ways to reach the top
 *
 * ------------------------------------------
 * Example 1:
 * Input:  n = 2
 * Output: 2
 * Explanation: 1 step + 1 step, or 2 steps
 *
 * Example 2:
 * Input:  n = 3
 * Output: 3
 * Explanation: 1+1+1, 1+2, 2+1
 */
// Top-down dynamic programming approach with memoization
// This approach uses recursion with memoization to avoid redundant calculations.
// It calculates the number of ways to climb to the top by considering the last step taken (1 step or 2 steps).
// The memoization array stores the results of previously computed steps to improve efficiency.
// The time complexity is O(n) and the space complexity is O(n) due to the memoization array.
function climbStairs(n: number): number {
  const memo: number[] = new Array(n + 1).fill(0);

  function climb(step: number): number {
    if (step > n) {
      return 0; // No way to climb if we overshoot
    }
    if (step === n) {
      return 1; // One way to climb if we are exactly at n
    }
    // If the result for this step is already computed, return it
    if (memo[step] !== 0) {
      return memo[step];
    }

    // Compute and store the result for the current step
    memo[step] = climb(step + 1) + climb(step + 2);
    return memo[step];
  }

  return climb(0);
}
// Bottom-up dynamic programming approach
// This approach uses an iterative method to build up the solution from the base cases.
// It initializes an array to store the number of ways to reach each step.
// The time complexity is O(n) and the space complexity is O(1) since we can optimize the space usage to only keep track of the last two steps.
function climbStairsBottomUp(n: number): number {
  if (n === 1) return 1; // Base case for 1 step
  if (n === 2) return 2; // Base case for 2 steps
  let prev1 = 1; // Ways to reach step 1
  let prev2 = 2; // Ways to reach step 2
  let current = 0;
  for (let i = 3; i <= n; i++) {
    current = prev1 + prev2; // Current step is the sum of the previous two steps
    prev1 = prev2; // Move to the next step
    prev2 = current; // Update the previous step
  }
  return current; // Return the number of ways to reach step n
}

// -------------------------
// Example Test Runs
// -------------------------

console.log(climbStairs(2)); // 2
console.log(climbStairs(3)); // 3
console.log(climbStairs(4)); // 5
console.log(climbStairs(5)); // 8
