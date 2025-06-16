/**
 * Problem: Sort Array of 0s, 1s and 2s (Dutch National Flag)
 * ------------------------------------------
 * Given an array consisting only of 0s, 1s, and 2s, sort the array in-place without using any built-in sort.
 * The sorted order should be: all 0s first, followed by all 1s, followed by all 2s.
 * 
 * You must solve this in one pass (O(n)) and use constant space (O(1)).
 *
 * ------------------------------------------
 * Input:
 * - An integer array `nums` of length n (1 <= n <= 10^5)
 * - Elements are only 0, 1, or 2
 * 
 * Output:
 * - The array `nums` is modified in-place to be sorted in 0s, then 1s, then 2s order.
 *
 * ------------------------------------------
 * Example 1:
 * Input:  [2, 0, 2, 1, 1, 0]
 * Output: [0, 0, 1, 1, 2, 2]
 *
 * Example 2:
 * Input:  [2, 0, 1]
 * Output: [0, 1, 2]
 */

function sortColors(nums: number[]): void {
  let low = 0;       // boundary for 0s
  let mid = 0;       // current index
  let high = nums.length - 1; // boundary for 2s

  while (mid <= high) {
    if (nums[mid] === 0) {
      [nums[low], nums[mid]] = [nums[mid], nums[low]];
      low++;
      mid++;
    } else if (nums[mid] === 1) {
      mid++;
    } else {
      [nums[mid], nums[high]] = [nums[high], nums[mid]];
      high--;
    }
  }
}

// -------------------------
// Example Test Runs
// -------------------------
const a = [2, 0, 2, 1, 1, 0];
// Step-by-step transformation:
// low = 0, mid = 0, high = 5
// [0, 0, 2, 1, 1, 2]
// low = 1, mid = 1, high = 4
// [0, 0, 2, 1, 1, 2]
// low = 2, mid = 2, high = 4
// [0, 0, 1, 1, 2, 2]
// low = 2, mid = 2, high = 3
// low = 2, mid = 3, high = 3
// low = 2, mid = 4, high = 3
// break when mid > high
// return [0, 0, 1, 1, 2, 2]
sortColors(a);
console.log(a); // Expected: [0, 0, 1, 1, 2, 2]

const b = [2, 0, 1];
sortColors(b);
console.log(b); // Expected: [0, 1, 2]
