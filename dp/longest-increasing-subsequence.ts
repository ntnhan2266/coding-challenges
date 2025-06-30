/**
 * Problem: Longest Increasing Subsequence
 * ------------------------------------------
 * Given an integer array `nums`, return the length of the longest
 * strictly increasing subsequence.
 *
 * ------------------------------------------
 * Difficulty: Medium (LeetCode #300)
 *
 * ------------------------------------------
 * Input:
 * - nums: number[] (1 <= nums.length <= 2500, -10⁴ <= nums[i] <= 10⁴)
 *
 * Output:
 * - number: length of the longest strictly increasing subsequence
 *
 * ------------------------------------------
 * Example 1:
 * Input:  nums = [10, 9, 2, 5, 3, 7, 101, 18]
 * Output: 4
 * Explanation: One LIS is [2, 3, 7, 101].
 *
 * Example 2:
 * Input:  nums = [0, 1, 0, 3, 2, 3]
 * Output: 4
 * Explanation: One LIS is [0, 1, 2, 3].
 */
 
// Dynamic-programming approach (O(n²) time, O(n) space).
// dp[i] stores the LIS length ending at index i.
function lengthOfLISDP(nums: number[]): number {
  if (nums.length === 0) return 0;
  const dp: number[] = new Array(nums.length).fill(1);

  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }

  return Math.max(...dp);
}

// Patience-sorting + binary-search approach (O(n log n) time, O(n) space).
// piles[k] holds the smallest possible tail of an LIS of length k+1.
function lengthOfLISBinary(nums: number[]): number {
  const piles: number[] = [];

  for (const num of nums) {
    let left = 0;
    let right = piles.length;
    while (left < right) {
      const mid = Math.floor((left + right) / 2);
      if (piles[mid] < num) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }
    piles[left] = num; // create new pile or replace existing pile top
  }

  return piles.length;
}

// -------------------------
// Example Test Runs
// -------------------------

console.log(lengthOfLISDP([10, 9, 2, 5, 3, 7, 101, 18]));       // 4
console.log(lengthOfLISBinary([10, 9, 2, 5, 3, 7, 101, 18]));    // 4

console.log(lengthOfLISDP([0, 1, 0, 3, 2, 3]));                 // 4
console.log(lengthOfLISBinary([0, 1, 0, 3, 2, 3]));             // 4
