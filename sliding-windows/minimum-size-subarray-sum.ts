/**
 * Problem: Minimum Size Subarray Sum
 * ------------------------------------------
 * Given an array of positive integers `nums` and a positive integer `target`,
 * return the minimal length of a contiguous subarray of which the sum is 
 * greater than or equal to `target`. If there is no such subarray, return 0 instead.
 *
 * ------------------------------------------
 * Difficulty: Medium (LeetCode #209)
 *
 * ------------------------------------------
 * Input:
 * - target: number (1 <= target <= 10^9)
 * - nums: number[] (1 <= nums.length <= 10^5, 0 < nums[i] <= 10^4)
 *
 * Output:
 * - number: minimal length of a valid subarray, or 0 if not found
 *
 * ------------------------------------------
 * Example 1:
 * Input:  target = 7, nums = [2,3,1,2,4,3]
 * Output: 2  // [4,3] is the smallest subarray with sum >= 7
 *
 * Example 2:
 * Input:  target = 4, nums = [1,4,4]
 * Output: 1
 *
 * Example 3:
 * Input:  target = 11, nums = [1,1,1,1,1,1,1,1]
 * Output: 0
 */

function minSubArrayLen(target: number, nums: number[]): number {
  let left = 0;
  let sum = 0;
  let minLen = Infinity;

  for (let right = 0; right < nums.length; right++) {
    sum += nums[right];

    while (sum >= target) {
      minLen = Math.min(minLen, right - left + 1);
      sum -= nums[left];
      left++;
    }
  }

  return minLen === Infinity ? 0 : minLen;
}

// -------------------------
// Example Test Runs
// -------------------------
console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]));  // Expected: 2
console.log(minSubArrayLen(4, [1, 4, 4]));           // Expected: 1
console.log(minSubArrayLen(11, [1, 1, 1, 1, 1, 1])); // Expected: 0
