/**
 * Problem: Max Consecutive Ones
 * ------------------------------------------
 * Given a binary array `nums`, return the maximum number of consecutive 1s in the array.
 *
 * ------------------------------------------
 * Input:
 * - nums: number[] consisting of only 0s and 1s (1 <= nums.length <= 10^5)
 * 
 * Output:
 * - An integer representing the maximum length of consecutive 1s.
 *
 * ------------------------------------------
 * Example 1:
 * Input:  [1, 1, 0, 1, 1, 1]
 * Output: 3
 *
 * Example 2:
 * Input:  [1, 0, 1, 1, 0, 1]
 * Output: 2
 */

function findMaxConsecutiveOnes(nums: number[]): number {
  let maxCount = 0;
  let currentCount = 0;

  for (const num of nums) {
    if (num === 1) {
      currentCount++;
      maxCount = Math.max(maxCount, currentCount);
    } else {
      currentCount = 0;
    }
  }

  return maxCount;
}

// -------------------------
// Example Test Runs
// -------------------------
console.log(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1])); // Expected: 3
console.log(findMaxConsecutiveOnes([1, 0, 1, 1, 0, 1])); // Expected: 2
