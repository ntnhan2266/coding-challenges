/**
 * Problem: Sum of Two Integers
 * ------------------------------------------
 * Given two integers a and b, return the sum of the two integers without using the operators + and -.
 * You must not use any built-in arithmetic operators.
 * 
 * ------------------------------------------
 * Difficulty: Medium (LeetCode #371)
 * 
 * ------------------------------------------
 * Constraints:
 * - -2^31 <= a, b <= 2^31 - 1
 */

function getSum(a: number, b: number): number {
  while (b !== 0) {
    const carry = (a & b) << 1; // common bits shifted left
    a = a ^ b;                  // sum without carry
    b = carry;                  // update carry
  }
  return a;
}

// Test Case 1: Simple positive numbers
console.log(getSum(1, 2)); 
// Expected: 3

// Test Case 2: Negative and positive
console.log(getSum(-2, 3)); 
// Expected: 1

// Test Case 3: Both negative
console.log(getSum(-4, -7)); 
// Expected: -11

// Test Case 4: Zero involved
console.log(getSum(0, 5)); 
// Expected: 5

// Test Case 5: Opposite numbers
console.log(getSum(100, -100)); 
// Expected: 0
