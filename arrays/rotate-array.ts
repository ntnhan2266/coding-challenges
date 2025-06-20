/**
 * Problem: Rotate Array
 * ------------------------------------------
 * Given an integer array `nums`, rotate the array to the right by `k` steps, where `k` is non-negative.
 *
 * The rotation is done **in-place**, meaning you cannot allocate another array to perform the operation.
 *
 * ------------------------------------------
 * Difficulty: Medium (LeetCode #189)
 *
 * ------------------------------------------
 * Input:
 * - nums: number[] (1 <= nums.length <= 10^5)
 * - k: number (0 <= k <= 10^5)
 *
 * Output:
 * - void: modify the input array in-place
 *
 * ------------------------------------------
 * Example 1:
 * Input:  nums = [1,2,3,4,5,6,7], k = 3
 * Output: [5,6,7,1,2,3,4]
 *
 * Example 2:
 * Input:  nums = [-1,-100,3,99], k = 2
 * Output: [3,99,-1,-100]
 */

function rotate(nums: number[], k: number): void {
  const n = nums.length;
  k %= n;

  // Helper function to reverse a portion of the array
  const reverse = (start: number, end: number) => {
    while (start < end) {
      [nums[start], nums[end]] = [nums[end], nums[start]];
      start++;
      end--;
    }
  };

  // Step 1: Reverse the whole array
  reverse(0, n - 1);
  // Step 2: Reverse first k elements
  reverse(0, k - 1);
  // Step 3: Reverse remaining n - k elements
  reverse(k, n - 1);
}

// -------------------------
// Example Test Runs
// -------------------------
const arr1 = [1,2,3,4,5,6,7];
rotate(arr1, 3);
console.log(arr1); // Expected: [5,6,7,1,2,3,4]

const arr2 = [-1,-100,3,99];
rotate(arr2, 2);
console.log(arr2); // Expected: [3,99,-1,-100]
