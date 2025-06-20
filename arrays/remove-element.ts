/**
 * Problem: Remove Element
 * ------------------------------------------
 * Given an integer array `nums` and an integer `val`, remove all occurrences of `val` in-place.
 * The relative order of the elements may be changed.
 *
 * Return the new length of the array after removal.
 *
 * Do not allocate extra space; modify the array in-place with O(1) extra memory.
 *
 * ------------------------------------------
 * Difficulty: Easy (LeetCode #27)
 *
 * ------------------------------------------
 * Input:
 * - nums: number[] (0 <= nums.length <= 100)
 * - val: number (0 <= val <= 100)
 *
 * Output:
 * - number: the number of elements left after removing all instances of `val`
 *   (the first `k` elements of `nums` should hold the result)
 *
 * ------------------------------------------
 * Example 1:
 * Input:  nums = [3,2,2,3], val = 3
 * Output: 2, nums = [2,2,_,_]
 *
 * Example 2:
 * Input:  nums = [0,1,2,2,3,0,4,2], val = 2
 * Output: 5, nums = [0,1,4,0,3,_,_,_]
 */

function removeElement(nums: number[], val: number): number {
  let k = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[k] = nums[i];
      k++;
    }
  }

  return k;
}

// -------------------------
// Example Test Runs
// -------------------------
const arr1 = [3,2,2,3];
console.log(removeElement(arr1, 3)); // Expected: 2, arr1 becomes [2,2,...]

const arr2 = [0,1,2,2,3,0,4,2];
console.log(removeElement(arr2, 2)); // Expected: 5, arr2 becomes [0,1,3,0,4,...]
