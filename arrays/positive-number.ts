/**
 * Problem: First Missing Positive
 * ------------------------------------------
 * Given an unsorted integer array, find the smallest missing positive integer.
 * 
 * You must solve this in O(n) time using constant extra space.
 * 
 * The smallest missing positive is the smallest positive integer (>= 1) 
 * that does not appear in the array.
 *
 * ------------------------------------------
 * Input:
 * - An integer array `nums` with length n (1 <= n <= 10^5)
 * - Each element: -2^31 <= nums[i] <= 2^31 - 1
 * 
 * Output:
 * - A single integer representing the smallest missing positive number.
 *
 * ------------------------------------------
 * Example 1:
 * Input:  [1, 2, 0]
 * Output: 3
 * Explanation: 1 and 2 are present, 3 is the smallest missing positive
 *
 * Example 2:
 * Input:  [3, 4, -1, 1]
 * Output: 2
 * Explanation: 1 and 3 are present, 2 is missing
 *
 * Example 3:
 * Input:  [7, 8, 9, 11, 12]
 * Output: 1
 * Explanation: All values > 0 are too large, 1 is the smallest missing
 *
 */

function firstMissingPositive(nums: number[]): number {
  // Filter out non-positive numbers and numbers larger than the length of the array
  const n = nums.length;
  for (let i = 0; i < n; i++) {
    if (nums[i] <= 0 || nums[i] > n) {
      nums[i] = n + 1; // Replace with a number outside the range
    }
  }

  // Use the array itself to mark presence of numbers
  for (let i = 0; i < n; i++) {
    const num = Math.abs(nums[i]);
    if (num <= n) {
      nums[num - 1] = -Math.abs(nums[num - 1]); // Mark as negative to indicate presence
    }
  }

  // Find the first positive index which indicates the missing number
  for (let i = 0; i < n; i++) {
    if (nums[i] > 0) {
      return i + 1; // Return the index + 1 as the missing positive number
    }
  }
  
  return n + 1; // If all numbers from 1 to n are present, return n + 1
}

// -------------------------
// Example Test Runs
// -------------------------
console.log(firstMissingPositive([1, 2, 0]));        // Expected: 3
console.log(firstMissingPositive([3, 4, -1, 1]));     // Expected: 2
console.log(firstMissingPositive([7, 8, 9, 11, 12])); // Expected: 1
console.log(firstMissingPositive([1, 1]));            // Expected: 2