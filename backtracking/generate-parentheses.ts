/**
 * Problem: Generate Parentheses
 * ------------------------------------------
 * Given n pairs of parentheses, write a function to generate all combinations
 * of well-formed parentheses.
 *
 * ------------------------------------------
 * Difficulty: Medium (LeetCode #22)
 *
 * ------------------------------------------
 * Input:
 * - n: number (1 <= n <= 8) — number of pairs of parentheses
 *
 * Output:
 * - string[]: All valid combinations of n pairs of balanced parentheses.
 *
 * ------------------------------------------
 * Example 1:
 * Input:  n = 3
 * Output: ["((()))","(()())","(())()","()(())","()()()"]
 *
 * Example 2:
 * Input:  n = 1
 * Output: ["()"]
 */

function generateParenthesis(n: number): string[] {
  const result: string[] = [];

  function backtrack(open: number, close: number, path: string): void {
    if (path.length === 2 * n) {
      result.push(path);
      return;
    }

    if (open < n) {
      backtrack(open + 1, close, path + '(');
    }

    if (close < open) {
      backtrack(open, close + 1, path + ')');
    }
  }

  backtrack(0, 0, '');
  return result;
}

// -------------------------
// Example Test Runs
// -------------------------
console.log(generateParenthesis(3)); // Expected: ["((()))","(()())","(())()","()(())","()()()"]
console.log(generateParenthesis(1)); // Expected: ["()"]
