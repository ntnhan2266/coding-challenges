/**
 * Problem: Sliding Window Maximum
 * ------------------------------------------
 * You are given an array of integers `nums`, and a sliding window size `k`.
 * Return an array containing the maximum value in each window as it slides from left to right.
 *
 * ------------------------------------------
 * Difficulty: Hard (LeetCode #239)
 *
 * ------------------------------------------
 * Input:
 * - nums: number[] (1 <= nums.length <= 10^5, -10^4 <= nums[i] <= 10^4)
 * - k: number (1 <= k <= nums.length)
 *
 * Output:
 * - number[]: list of maximums from each sliding window of size `k`
 *
 * ------------------------------------------
 * Example 1:
 * Input:  nums = [1,3,-1,-3,5,3,6,7], k = 3
 * Output: [3,3,5,5,6,7]
 *
 * Example 2:
 * Input:  nums = [1], k = 1
 * Output: [1]
 */

function maxSlidingWindow(nums: number[], k: number): number[] {
  const deque: number[] = []; // store indices in decreasing order
  const result: number[] = [];

  for (let i = 0; i < nums.length; i++) {
    // Remove indexes outside the current window
    if (deque.length && deque[0] <= i - k) {
      deque.shift();
    }

    // Maintain decreasing order in deque
    while (deque.length && nums[deque[deque.length - 1]] < nums[i]) {
      deque.pop();
    }

    deque.push(i);

    // Append max for each valid window
    if (i >= k - 1) {
      result.push(nums[deque[0]]);
    }
  }

  return result;
}

// -------------------------
// Example Test Runs
// -------------------------
console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3)); // Expected: [3,3,5,5,6,7]
console.log(maxSlidingWindow([1], 1));                // Expected: [1]
