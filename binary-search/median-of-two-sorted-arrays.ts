/**
 * Problem: Median of Two Sorted Arrays
 * ------------------------------------------
 * Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.
 * The overall run time complexity should be O(log (m+n)).
 * 
 * ------------------------------------------
 * Difficulty: Hard (LeetCode #4)
 * 
 * ------------------------------------------
 * Example:
 * Input: nums1 = [1,3], nums2 = [2]
 * Output: 2.00000
 * Explanation: merged array = [1,2,3] and median is 2.
 * 
 * Input: nums1 = [1,2], nums2 = [3,4]
 * Output: 2.50000
 * Explanation: merged array = [1,2,3,4] and median is (2 + 3)/2 = 2.5.
 * 
 * ------------------------------------------
 * Constraints:
 * - nums1.length == m
 * - nums2.length == n
 * - 0 <= m, n <= 1000
 * - 1 <= m + n <= 2000
 * - -10^6 <= nums1[i], nums2[i] <= 10^6
 */

function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  if (nums1.length > nums2.length) {
    return findMedianSortedArrays(nums2, nums1); // always binary search on smaller array
  }

  const m = nums1.length;
  const n = nums2.length;
  let low = 0;
  let high = m;

  while (low <= high) {
    const i = Math.floor((low + high) / 2);
    const j = Math.floor((m + n + 1) / 2) - i;

    const maxLeftA = i === 0 ? -Infinity : nums1[i - 1];
    const minRightA = i === m ? Infinity : nums1[i];

    const maxLeftB = j === 0 ? -Infinity : nums2[j - 1];
    const minRightB = j === n ? Infinity : nums2[j];

    if (maxLeftA <= minRightB && maxLeftB <= minRightA) {
      if ((m + n) % 2 === 0) {
        return (Math.max(maxLeftA, maxLeftB) + Math.min(minRightA, minRightB)) / 2;
      } else {
        return Math.max(maxLeftA, maxLeftB);
      }
    } else if (maxLeftA > minRightB) {
      high = i - 1;
    } else {
      low = i + 1;
    }
  }

  throw new Error("Input arrays are not sorted correctly");
}

// Test Case 1: Odd total length, small input
console.log(findMedianSortedArrays([1, 3], [2])); // Expected: 2.0
// Test Case 2: Even total length, small input
console.log(findMedianSortedArrays([1, 2], [3, 4])); // Expected: 2.5
// Test Case 3: One array empty
console.log(findMedianSortedArrays([], [1])); // Expected: 1.0
// Test Case 4: Unequal lengths, interleaved values
console.log(findMedianSortedArrays([1, 3, 8, 9, 15], [7, 11, 18, 19, 21, 25])); // Expected: 11.0
// Test Case 5: Large inputs with duplicates
console.log(findMedianSortedArrays(
  [1, 2, 2, 2, 2, 3, 4, 5],
  [2, 2, 3, 4, 4, 4, 5, 6]
)); // Expected: 3.0
