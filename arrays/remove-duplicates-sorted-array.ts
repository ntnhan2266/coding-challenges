/**
 * Problem: Remove Duplicates from Sorted Array
 * ------------------------------------------
 * Given a sorted integer array `nums`, remove the duplicates **in-place** such that each element appears only once.
 * Return the new length of the modified array. Do not allocate extra space for another array.
 *
 * Note: You must do this by modifying the input array in-place with O(1) extra memory.
 *
 * ------------------------------------------
 * Input:
 * - nums: number[] (0 <= nums.length <= 10^5)
 * - The array is sorted in non-decreasing order
 * 
 * Output:
 * - The number of unique elements, and the first k elements of the array must be the result (in any order after k doesn't matter)
 *
 * ------------------------------------------
 * Example 1:
 * Input:  nums = [1, 1, 2]
 * Output: 2 → nums becomes [1, 2, _]
 *
 * Example 2:
 * Input:  nums = [0,0,1,1,1,2,2,3,3,4]
 * Output: 5 → nums becomes [0, 1, 2, 3, 4, _...]
 */

function removeDuplicates(nums: number[]): number {
  if (nums.length === 0) return 0;

  let i = 0;

  for (let j = 1; j < nums.length; j++) {
    if (nums[j] !== nums[i]) {
      i++;
      nums[i] = nums[j];
    }
  }

  return i + 1;
}

// -------------------------
// Example Test Runs
// -------------------------
const a = [1, 1, 2];
const lenA = removeDuplicates(a);
console.log(lenA, a.slice(0, lenA)); // Expected: 2, [1, 2]

const b = [0,0,1,1,1,2,2,3,3,4];
const lenB = removeDuplicates(b);
console.log(lenB, b.slice(0, lenB)); // Expected: 5, [0, 1, 2, 3, 4]
