/**
 * Problem: Equilibrium Point
 * ------------------------------------------
 * Given an array of integers, find the **equilibrium point** — a position such that 
 * the sum of elements before it is equal to the sum of elements after it.
 * 
 * You need to return the 1-based index of the first such point. If no such index exists, return -1.
 * 
 * An equilibrium point is where:
 *    sum(arr[0..i-1]) == sum(arr[i+1..n-1])
 *
 * ------------------------------------------
 * Input:
 * - An array of integers `arr` with length n (1 <= n <= 10^6)
 * - Each element: -10^9 <= arr[i] <= 10^9
 * 
 * Output:
 * - A single integer representing the 1-based index of the equilibrium point
 *   or -1 if no such point exists.
 *
 * ------------------------------------------
 * Example 1:
 * Input:  [1, 3, 5, 2, 2]
 * Output: 3
 * Explanation: Left sum = 1 + 3 = 4, Right sum = 2 + 2 = 4
 *
 * Example 2:
 * Input:  [1]
 * Output: 1
 * Explanation: Only one element — trivially an equilibrium point
 *
 * Example 3:
 * Input:  [1, 2, 3]
 * Output: -1
 * Explanation: No index where left and right sums are equal
 *
 */

// O(n^2) solution using brute force
// This solution is not efficient for large arrays, but it demonstrates the concept clearly.
function equilibriumPoint(arr: number[]): number {
  for (let i = 0; i < arr.length; i++) {
    // Calculate left sum
    const leftSum = arr.slice(0, i).reduce((a, b) => a + b, 0);
    
    // Calculate right sum
    const rightSum = arr.slice(i + 1).reduce((a, b) => a + b, 0);
    
    // Check if left sum equals right sum
    if (leftSum === rightSum) {
      return i + 1; // Return 1-based index
    }
  }
  
  return -1; // No equilibrium point found
}

// O(n) solution using prefix sums
function equilibriumPointOptimized(arr: number[]): number {
  const totalSum = arr.reduce((a, b) => a + b, 0);
  let leftSum = 0;

  for (let i = 0; i < arr.length; i++) {
    // Right sum can be derived from total sum and left sum
    const rightSum = totalSum - leftSum - arr[i];
    
    // Check if left sum equals right sum
    if (leftSum === rightSum) {
      return i + 1; // Return 1-based index
    }
    
    // Update left sum for next iteration
    leftSum += arr[i];
  }

  return -1; // No equilibrium point found
}

// -------------------------
// Example Test Runs
// -------------------------

// Testing the brute force solution
console.log(equilibriumPoint([1, 3, 5, 2, 2]));               // Expected: 3
console.log(equilibriumPoint([1]));                           // Expected: 1
console.log(equilibriumPoint([1, 2, 3]));                     // Expected: -1

// Testing the optimized solution
console.log(equilibriumPointOptimized([1, 3, 5, 2, 2]));      // Expected: 3
console.log(equilibriumPointOptimized([1]));                  // Expected: 1
console.log(equilibriumPointOptimized([1, 2, 3]));            // Expected: -1
