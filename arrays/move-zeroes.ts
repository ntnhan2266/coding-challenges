/**
 * Problem: Move Zeroes
 * ------------------------------------------
 * Given an array `nums`, move all 0's to the end of it while maintaining the relative
 * order of the non-zero elements.
 *
 * You must do this in-place without making a copy of the array.
 *
 * ------------------------------------------
 * Input:
 * - nums: number[] (1 <= nums.length <= 10^4)
 * - Each element: -2^31 <= nums[i] <= 2^31 - 1
 *
 * Output:
 * - The same array with all non-zero elements moved forward and 0's shifted to the end.
 *
 * ------------------------------------------
 * Example:
 * Input:  [0, 1, 0, 3, 12]
 * Output: [1, 3, 12, 0, 0]
 */
function moveZeroes(nums: number[]): number[] {
  let insertPos = 0; // Position to insert non-zero elements

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[insertPos] = nums[i]; // Place non-zero element at insert position
      insertPos++; // Move insert position forward
    }
  }

  // Fill the rest of the array with zeros
  for (let i = insertPos; i < nums.length; i++) {
    nums[i] = 0; // Set remaining positions to zero
  }

  return nums; // Return the modified array
}

function moveZeroesBySwapping(nums: Array<number>) {
  const n: number = nums.length;
  let zeroIdx: number = 0;
  for (let i: number = 0; i < n; i++) {
    if (nums[i] !== 0) {
      const temp = nums[zeroIdx];
      nums[zeroIdx] = nums[i];
      nums[i] = temp;
      zeroIdx++;
    }
  }
  return nums;
}

// -------------------------
// Example Test Runs
// -------------------------
const arr1 = [0, 1, 0, 3, 12];
moveZeroes(arr1);
console.log(arr1); // Expected: [1, 3, 12, 0, 0]

const arr2 = [0, 0, 1];
moveZeroes(arr2);
console.log(arr2); // Expected: [1, 0, 0]

const arr3 = [4, 2, 4, 0, 0, 3, 0, 5, 1, 0];
moveZeroes(arr3);
console.log(arr3); // Expected: [4, 2, 4, 3, 5, 1, 0, 0, 0, 0]

const arr4 = [0, 0, 0];
moveZeroes(arr4);
console.log(arr4); // Expected: [0, 0, 0]
