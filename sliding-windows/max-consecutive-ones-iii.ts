/**
 * Problem: Max Consecutive Ones III
 * ------------------------------------------
 * Given a binary array `nums` and an integer `k`, return the maximum number of
 * consecutive 1s in the array if you can flip at most `k` 0s.
 *
 * ------------------------------------------
 * Difficulty: Medium (LeetCode #1004)
 *
 * ------------------------------------------
 * Input:
 * - nums: number[] (0 or 1 only, 1 <= nums.length <= 10^5)
 * - k: number (0 <= k <= nums.length)
 *
 * Output:
 * - number: the length of the longest subarray containing only 1s after at most `k` flips
 *
 * ------------------------------------------
 * Example 1:
 * Input:  nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2
 * Output: 6  // Flip two 0s at positions 5 and 10 → [1,1,1,0,0,1,1,1,1,1,1]
 *
 * Example 2:
 * Input:  nums = [0,0,1,1,1,0,0], k = 0
 * Output: 3  // No flips allowed, so max consecutive 1s = 3
 */

function longestOnes(nums: number[], k: number): number {
  let left = 0;
  let zeroCount = 0;
  let maxLen = 0;

  for (let right = 0; right < nums.length; right++) {
    if (nums[right] === 0) zeroCount++;

    while (zeroCount > k) {
      if (nums[left] === 0) zeroCount--;
      left++;
    }

    maxLen = Math.max(maxLen, right - left + 1);
  }

  return maxLen;
}

// -------------------------
// Example Test Runs
// -------------------------
console.log(longestOnes([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2)); // Expected: 6
console.log(longestOnes([0, 0, 1, 1, 1, 0, 0], 0));         // Expected: 3
