/**
 * Problem: Largest Number From Array
 * ------------------------------------------
 * Given a list of non-negative integers, arrange them such that they form the largest number.
 * Return the result as a string.
 *
 * ------------------------------------------
 * Input:
 * - An array of integers `nums` (1 <= nums.length <= 10^5)
 * - 0 <= nums[i] <= 10^9
 * 
 * Output:
 * - A string representing the largest possible number formed.
 *
 * ------------------------------------------
 * Example 1:
 * Input:  [10, 2]
 * Output: "210"
 *
 * Example 2:
 * Input:  [3, 30, 34, 5, 9]
 * Output: "9534330"
 *
 * Example 3:
 * Input:  [0, 0]
 * Output: "0"
 */

function largestNumberFromArray(nums: number[]): string {
    // Convert numbers to strings for comparison
    const strNums = nums.map(num => num.toString());

    // Custom comparator to sort numbers based on concatenated results
    strNums.sort((a, b) => (b + a).localeCompare(a + b));

    // If the largest number is '0', return '0'
    if (strNums[0] === '0') {
        return '0';
    }

    // Join the sorted array to form the largest number
    return strNums.join('');
}

// -------------------------
// Example Test Runs
// -------------------------
console.log(largestNumberFromArray([10, 2]));             // Expected: "210"
console.log(largestNumberFromArray([3, 30, 34, 5, 9]));   // Expected: "9534330"
console.log(largestNumberFromArray([0, 0]));              // Expected: "0"
console.log(largestNumberFromArray([1, 20, 23, 4, 8]));   // Expected: "8423201"
