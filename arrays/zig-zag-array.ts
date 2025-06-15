/**
 * Problem: Zig-Zag Array (Wave Form Transformation)
 * ------------------------------------------
 * Given an array of distinct integers, transform the array into zig-zag fashion in-place.
 * 
 * A zig-zag pattern is where:
 *   - a < b > c < d > e < f ...
 *
 * The goal is to reorder the array so that it follows this alternating pattern.
 *
 * ------------------------------------------
 * Input:
 * - An array of integers `arr` (1 <= arr.length <= 10^5)
 * 
 * Output:
 * - The array is modified in-place to become zig-zag.
 *
 * ------------------------------------------
 * Example 1:
 * Input:  [4, 3, 7, 8, 6, 2, 1]
 * Output: [3, 7, 4, 8, 2, 6, 1]
 *
 * Example 2:
 * Input:  [1, 4, 3, 2]
 * Output: [1, 4, 2, 3]
 */

function zigZagArray(arr: number[]): void {
  let flag = true; // true means '<' expected, false means '>'

  for (let i = 0; i < arr.length - 1; i++) {
    if (flag) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
      }
    } else {
      if (arr[i] < arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
      }
    }
    flag = !flag; // flip expectation
  }
}

// -------------------------
// Example Test Runs
// -------------------------
const a = [4, 3, 7, 8, 6, 2, 1];
zigZagArray(a);
console.log(a); // Expected: [3, 7, 4, 8, 2, 6, 1]

const b = [1, 4, 3, 2];
zigZagArray(b);
console.log(b); // Expected: [1, 4, 2, 3]
