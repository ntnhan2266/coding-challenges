/**
 * Problem: Trapping Rain Water
 * ------------------------------------------
 * Given `n` non-negative integers representing an elevation map where the width of each bar is 1,
 * compute how much water it can trap after raining.
 *
 * ------------------------------------------
 * Difficulty: Hard (LeetCode #42)
 *
 * ------------------------------------------
 * Input:
 * - height: number[] (n == height.length, 1 <= n <= 2 * 10^4, 0 <= height[i] <= 10^5)
 *
 * Output:
 * - number: total units of water that can be trapped
 *
 * ------------------------------------------
 * Example 1:
 * Input:  height = [0,1,0,2,1,0,1,3,2,1,2,1]
 * Output: 6
 *
 * Example 2:
 * Input:  height = [4,2,0,3,2,5]
 * Output: 9
 */

function trap(height: number[]): number {
  let left = 0;
  let right = height.length - 1;
  let leftMax = 0;
  let rightMax = 0;
  let total = 0;

  while (left < right) {
    if (height[left] < height[right]) {
      if (height[left] >= leftMax) {
        leftMax = height[left];
      } else {
        total += leftMax - height[left];
      }
      left++;
    } else {
      if (height[right] >= rightMax) {
        rightMax = height[right];
      } else {
        total += rightMax - height[right];
      }
      right--;
    }
  }

  return total;
}

// -------------------------
// Example Test Runs
// -------------------------

console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1])); // 6
console.log(trap([4,2,0,3,2,5]));             // 9
console.log(trap([1,0,1]));                   // 1
console.log(trap([5,4,1,2]));                 // 1
