/**
 * Problem: Remove Duplicates from Sorted Array II
 * ------------------------------------------
 * Given a sorted array `nums`, remove some duplicates **in-place** such that each unique element 
 * appears at most twice. The relative order of the elements should be kept the same.
 *
 * Return the number of elements in the resulting array after removal.
 *
 * Do not allocate extra space for another array — do this in-place with O(1) extra memory.
 *
 * ------------------------------------------
 * Difficulty: Medium (LeetCode #80)
 *
 * ------------------------------------------
 * Input:
 * - nums: number[] (0 <= nums.length <= 10^5)
 *
 * Output:
 * - number: the number of elements after removing excess duplicates
 *   (the first `k` elements in `nums` should contain the final result)
 *
 * ------------------------------------------
 * Example 1:
 * Input:  nums = [1,1,1,2,2,3]
 * Output: 5, nums = [1,1,2,2,3,_]
 *
 * Example 2:
 * Input:  nums = [0,0,1,1,1,1,2,3,3]
 * Output: 7, nums = [0,0,1,1,2,3,3,_,_]
 */

function removeDuplicates(nums: number[]): number {
  if (nums.length <= 2) return nums.length;

  let insertPos = 2;

  for (let i = 2; i < nums.length; i++) {
    if (nums[i] !== nums[insertPos - 2]) {
      nums[insertPos] = nums[i];
      insertPos++;
    }
  }

  return insertPos;
}

// -------------------------
// Example Test Runs
// -------------------------
const arr1 = [1,1,1,2,2,3];
console.log(removeDuplicates(arr1)); // Expected: 5, arr1 = [1,1,2,2,3,_]

const arr2 = [0,0,1,1,1,1,2,3,3];
console.log(removeDuplicates(arr2)); // Expected: 7, arr2 = [0,0,1,1,2,3,3,_,_]
