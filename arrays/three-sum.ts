/**
 * Problem: 3Sum
 * ------------------------------------------
 * Given an integer array `nums`, return all the **unique triplets** [nums[i], nums[j], nums[k]]
 * such that i ≠ j ≠ k and nums[i] + nums[j] + nums[k] === 0.
 * 
 * The solution set must not contain duplicate triplets.
 *
 * ------------------------------------------
 * Input:
 * - nums: number[] (3 <= nums.length <= 3000)
 * - Each element: -10^5 <= nums[i] <= 10^5
 * 
 * Output:
 * - An array of unique triplets [a, b, c] such that a + b + c == 0
 *
 * ------------------------------------------
 * Example 1:
 * Input:  [-1, 0, 1, 2, -1, -4]
 * Output: [[-1, -1, 2], [-1, 0, 1]]
 *
 * Example 2:
 * Input:  [0, 1, 1]
 * Output: []
 *
 * Example 3:
 * Input:  [0, 0, 0]
 * Output: [[0, 0, 0]]
 */

function threeSum(nums: number[]): number[][] {
  const result: number[][] = [];
  nums.sort((a, b) => a - b); // Sort to use two pointers

  for (let i = 0; i < nums.length - 2; i++) {
    // Skip duplicates
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];

      if (sum === 0) {
        result.push([nums[i], nums[left], nums[right]]);

        // Skip duplicates
        while (left < right && nums[left] === nums[left + 1]) left++;
        while (left < right && nums[right] === nums[right - 1]) right--;

        left++;
        right--;
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }

  return result;
}

// -------------------------
// Example Test Runs
// -------------------------
console.log(threeSum([-1, 0, 1, 2, -1, -4])); // Expected: [[-1, -1, 2], [-1, 0, 1]]
console.log(threeSum([0, 0, 0]));             // Expected: [[0, 0, 0]]
console.log(threeSum([0, 1, 1]));             // Expected: []
