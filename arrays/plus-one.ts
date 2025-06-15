/**
 * Problem: Plus One
 * ------------------------------------------
 * Given a non-empty array of decimal digits representing a non-negative integer, 
 * increment the integer by one and return the resulting array of digits.
 *
 * The digits are stored such that the most significant digit is at the head of the list.
 *
 * ------------------------------------------
 * Input:
 * - digits: number[] (1 <= digits.length <= 100)
 * - Each element: 0 <= digits[i] <= 9
 *
 * Output:
 * - A new array of digits representing the number plus one.
 *
 * ------------------------------------------
 * Example 1:
 * Input:  [1, 2, 3]
 * Output: [1, 2, 4]
 *
 * Example 2:
 * Input:  [4, 3, 2, 1]
 * Output: [4, 3, 2, 2]
 *
 * Example 3:
 * Input:  [9]
 * Output: [1, 0]
 */

function plusOne(digits: number[]): number[] {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] < 9) {
      digits[i]++;
      return digits;
    }
    digits[i] = 0;
  }

  // If all digits were 9, e.g., [9, 9, 9] -> [1, 0, 0, 0]
  digits.unshift(1);
  return digits;
}

// -------------------------
// Example Test Runs
// -------------------------
console.log(plusOne([1, 2, 3]));    // Expected: [1, 2, 4]
console.log(plusOne([4, 3, 2, 1])); // Expected: [4, 3, 2, 2]
console.log(plusOne([9]));          // Expected: [1, 0]
console.log(plusOne([9, 9, 9]));    // Expected: [1, 0, 0, 0]
