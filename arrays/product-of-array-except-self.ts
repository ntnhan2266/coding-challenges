/**
 * Problem: Product of Array Except Self
 * ------------------------------------------
 * Given an integer array `nums`, return an array `output` such that `output[i]` is equal
 * to the product of all elements of `nums` except `nums[i]`.
 *
 * The solution must run in O(n) time and must not use division.
 *
 * ------------------------------------------
 * Input:
 * - nums: number[] (2 <= nums.length <= 10^5)
 * - Each element: -30 <= nums[i] <= 30
 * - All products fit in 32-bit integer
 *
 * Output:
 * - number[]: the result array where result[i] = product of all nums except nums[i]
 *
 * ------------------------------------------
 * Example 1:
 * Input:  [1, 2, 3, 4]
 * Output: [24, 12, 8, 6]
 *
 * Example 2:
 * Input:  [-1, 1, 0, -3, 3]
 * Output: [0, 0, 9, 0, 0]
 */

function productExceptSelf(nums: number[]): number[] {
  const n = nums.length;
  const output = new Array(n).fill(1);

  let prefix = 1;
  for (let i = 0; i < n; i++) {
    output[i] = prefix;
    prefix *= nums[i];
  }

  let suffix = 1;
  for (let i = n - 1; i >= 0; i--) {
    output[i] *= suffix;
    suffix *= nums[i];
  }

  return output;
}

// -------------------------
// Example Test Runs
// -------------------------
console.log(productExceptSelf([1, 2, 3, 4]));       // Expected: [24, 12, 8, 6]
console.log(productExceptSelf([-1, 1, 0, -3, 3]));  // Expected: [0, 0, 9, 0, 0]
