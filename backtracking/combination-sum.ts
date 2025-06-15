/**
 * Problem: Combination Sum
 * ------------------------------------------
 * Given an array of distinct integers `candidates` and a target integer `target`,
 * return all unique combinations of `candidates` where the chosen numbers sum to `target`.
 *
 * You may reuse the same number from `candidates` multiple times.
 * You may return the combinations in any order.
 *
 * ------------------------------------------
 * Input:
 * - candidates: number[] (1 <= candidates.length <= 30, 1 <= candidates[i] <= 200)
 * - target: number (1 <= target <= 500)
 *
 * Output:
 * - number[][]: All unique combinations where the chosen numbers sum to `target`.
 *
 * ------------------------------------------
 * Example 1:
 * Input:  candidates = [2, 3, 6, 7], target = 7
 * Output: [[2, 2, 3], [7]]
 *
 * Example 2:
 * Input:  candidates = [2, 3, 5], target = 8
 * Output: [[2, 2, 2, 2], [2, 3, 3], [3, 5]]
 */

function combinationSum(candidates: number[], target: number): number[][] {
    const result: number[][] = [];

  function backtrack(start: number, path: number[], total: number): void {
    if (total === target) {
      result.push([...path]);
      return;
    }

    if (total > target) return;

    for (let i = start; i < candidates.length; i++) {
      path.push(candidates[i]);
      backtrack(i, path, total + candidates[i]); // not i + 1 because we can reuse same element
      path.pop();
    }
  }

  backtrack(0, [], 0);
  return result;
}

// -------------------------
// Example Test Runs
// -------------------------
console.log('Combination Sum I Examples:');
console.log(combinationSum([2, 3, 6, 7], 7));  // Expected: [[2, 2, 3], [7]]
console.log(combinationSum([2, 3, 5], 8));     // Expected: [[2, 2, 2, 2], [2, 3, 3], [3, 5]]

// -----------------------------

/**
 * Problem: Unique Combination Sum II
 * ------------------------------------------
 * Given an array of distinct integers `candidates` and a target integer `target`,
 * return all unique combinations of `candidates` where the chosen numbers sum to `target`.
 * Each number in `candidates` may only be used once in the combination.
 *
 * You may return the combinations in any order.
 * ------------------------------------------
 * Input:
 * - candidates: number[] (1 <= candidates.length <= 30, 1 <= candidates[i] <= 200)
 * - target: number (1 <= target <= 500)
 *
 * Output:
 * - number[][]: All unique combinations where the chosen numbers sum to `target`.
 *
 * ------------------------------------------
 * Example 1:
 * Input:  candidates = [10, 1, 2, 7, 6, 1, 5], target = 8
 * Output: [[1, 1, 6], [1, 2, 5], [2, 6], [1, 7]]
 * Explanation: Note that the combination [1, 1, 6] is included only once.
 *
 * Example 2:
 * Input:  candidates = [2, 5, 2, 1, 2], target = 5
 * Output: [[1, 2, 2], [5]]
 * Explanation: Note that the combination [2, 5] is not included because it uses the number 2 twice.
 */
function combinationSumII(candidates: number[], target: number): number[][] {
  const result: number[][] = [];
  const sortedCandidate = candidates.sort((a, b) => a - b);

  function backtrack(start: number, path: number[], total: number): void {
    if (total === target) {
      result.push([...path]);
      return;
    }

    if (total > target) return;

    for (let i = start; i < sortedCandidate.length; i++) {
      // Skip duplicates
      if (i > start && sortedCandidate[i] === sortedCandidate[i - 1]) continue;

      path.push(sortedCandidate[i]);
      backtrack(i + 1, path, total + sortedCandidate[i]); // i + 1 to avoid reusing the same element
      path.pop();
    }
  }

  // Start backtracking from the first index
  backtrack(0, [], 0);
  return result;
}


// -------------------------
// Example Test Runs
// -------------------------
console.log('Combination Sum II Examples:');
console.log(combinationSumII([10, 1, 2, 7, 6, 1, 5], 8));  // Expected: [[1, 1, 6], [1, 2, 5], [2, 6], [1, 7]]
console.log(combinationSumII([2, 5, 2, 1, 2], 5));     // Expected: [[1, 2, 2], [5]]

/**
 * Problem: Combination Sum III
 * ------------------------------------------
 * Find all valid combinations of `k` numbers that sum up to `n`,
 * using only numbers from 1 to 9. Each number can be used **once** in the combination.
 *
 * Return a list of all possible valid combinations.
 *
 * ------------------------------------------
 * Difficulty: Medium (LeetCode #216)
 *
 * ------------------------------------------
 * Input:
 * - k: number (1 <= k <= 9) — number of elements to pick
 * - n: number (1 <= n <= 60) — target sum
 *
 * Output:
 * - number[][]: All combinations of `k` distinct numbers in [1..9] that sum to `n`
 *
 * ------------------------------------------
 * Example 1:
 * Input:  k = 3, n = 7
 * Output: [[1, 2, 4]]
 *
 * Example 2:
 * Input:  k = 3, n = 9
 * Output: [[1, 2, 6], [1, 3, 5], [2, 3, 4]]
 *
 * Example 3:
 * Input:  k = 4, n = 1
 * Output: []
 */
function combinationSumIII(k: number, n: number): number[][] {
  const result: number[][] = [];

  function backtrack(start: number, path: number[], total: number): void {
      if (path.length === k && total === n) {
        result.push([...path]);
        return;
      }

    if (path.length > k || total > n) return;

    for (let i = start; i <= 9; i++) {
      path.push(i);
      backtrack(i + 1, path, total + i); // i + 1 to avoid reusing the same element
      path.pop();
    }
  }

  backtrack(1, [], 0);
  return result;
}
// -------------------------
// Example Test Runs
// -------------------------
console.log('Combination Sum III Examples:');
console.log(combinationSumIII(3, 7));  // Expected: [[1, 2, 4]]
console.log(combinationSumIII(3, 9));  // Expected: [[1, 2, 6], [1, 3, 5], [2, 3, 4]]
console.log(combinationSumIII(4, 1));  // Expected: []
console.log(combinationSumIII(9, 45)); // Expected: [[1, 2, 3, 4, 5, 6, 7, 8, 9]]