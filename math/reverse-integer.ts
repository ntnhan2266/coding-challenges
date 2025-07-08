/**
 * Problem: Reverse Integer
 * ------------------------------------------
 * Given a signed 32-bit integer x, return x with its digits reversed.
 * If reversing x causes the value to go outside the signed 32-bit integer range [-2^31, 2^31 - 1], return 0.
 * 
 * ------------------------------------------
 * Difficulty: Medium (LeetCode #7)
 * 
 * ------------------------------------------
 * Constraints:
 * - -2^31 <= x <= 2^31 - 1
 */

function reverseUseStr(x: number): number {
  const sign = x < 0 ? -1 : 1;
  const reversed = parseInt(Math.abs(x).toString().split('').reverse().join('')) * sign;
  if (reversed < -(2 ** 31) || reversed > 2 ** 31 - 1) return 0;
  return reversed;
}

function reverse(x: number): number {
    let result = 0;
    let remain = Math.abs(x);
    while (remain > 0) {
        const lastDigit = remain % 10;
        if (result > Math.floor((2 ** 31) / 10)) return 0;
        result = result * 10 + lastDigit;
        remain = Math.floor(remain / 10);
    }
    return x > 0 ? result : -(result);
}

// Test Case 1: Simple positive
console.log(reverse(123));
// Expected: 321

// Test Case 2: Simple negative
console.log(reverse(-123));
// Expected: -321

// Test Case 3: Ends with zero
console.log(reverse(120));
// Expected: 21

// Test Case 4: Reversal causes overflow
console.log(reverse(1534236469));
// Expected: 0

// Test Case 5: Edge case: -2^31
console.log(reverse(-2147483648));
// Expected: 0
