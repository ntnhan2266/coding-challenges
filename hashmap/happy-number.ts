/**
 * Problem: Happy Number
 * ------------------------------------------
 * A **happy number** is a number defined by the following process:
 * - Starting with any positive integer, replace the number by the sum of the squares of its digits.
 * - Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle that does not include 1.
 * - Those numbers for which this process ends in 1 are happy numbers.
 *
 * Return `true` if `n` is a happy number, and `false` if not.
 *
 * ------------------------------------------
 * Difficulty: Easy (LeetCode #202)
 *
 * ------------------------------------------
 * Input:
 * - n: number (1 <= n <= 2^31 - 1)
 *
 * Output:
 * - boolean: true if the number is happy, false otherwise
 *
 * ------------------------------------------
 * Example 1:
 * Input:  n = 19
 * Output: true
 * Explanation:
 * 1^2 + 9^2 = 82  
 * 8^2 + 2^2 = 68  
 * 6^2 + 8^2 = 100  
 * 1^2 + 0^2 + 0^2 = 1
 *
 * Example 2:
 * Input:  n = 2
 * Output: false
 */

function isHappy(n: number): boolean {
  const seen = new Set<number>();

  const getNext = (num: number): number => {
    let total = 0;
    while (num > 0) {
      const digit = num % 10;
      total += digit * digit;
      num = Math.floor(num / 10);
    }
    return total;
  };

  while (n !== 1 && !seen.has(n)) {
    seen.add(n);
    n = getNext(n);
  }

  return n === 1;
}

// -------------------------
// Example Test Runs
// -------------------------
console.log(isHappy(19)); // Expected: true
console.log(isHappy(2));  // Expected: false
console.log(isHappy(1));  // Expected: true
console.log(isHappy(7));  // Expected: true
