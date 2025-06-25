/**
 * Problem: Container With Most Water
 * ------------------------------------------
 * You are given an integer array `height` of length `n`.
 * There are `n` vertical lines drawn such that the two endpoints of the i-th line are `(i, 0)` and `(i, height[i])`.
 * 
 * Find two lines that together with the x-axis form a container that holds the most water.
 * Return the maximum amount of water a container can store.
 *
 * ------------------------------------------
 * Difficulty: Medium (LeetCode #11)
 *
 * ------------------------------------------
 * Input:
 * - height: number[] (2 <= height.length <= 10^5, 0 <= height[i] <= 10^4)
 *
 * Output:
 * - number: the maximum amount of water a container can store
 *
 * ------------------------------------------
 * Example 1:
 * Input:  height = [1,8,6,2,5,4,8,3,7]
 * Output: 49
 *
 * Example 2:
 * Input:  height = [1,1]
 * Output: 1
 */

function maxArea(height: number[]): number {
  let left = 0;
  let right = height.length - 1;
  let max = 0;

  while (left < right) {
    const h = Math.min(height[left], height[right]);
    const w = right - left;
    max = Math.max(max, h * w);

    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return max;
}

// -------------------------
// Example Test Runs
// -------------------------

console.log(maxArea([1,8,6,2,5,4,8,3,7])); // 49
console.log(maxArea([1,1]));               // 1
console.log(maxArea([4,3,2,1,4]));         // 16
console.log(maxArea([1,2,1]));             // 2
