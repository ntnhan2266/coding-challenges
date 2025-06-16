/**
 * Problem: Letter Case Permutation
 * ------------------------------------------
 * Given a string `s`, you can transform each letter to either lowercase or uppercase
 * to create all possible permutations. Return a list of all possible strings.
 *
 * Digits remain unchanged.
 *
 * ------------------------------------------
 * Difficulty: Medium (LeetCode #784)
 *
 * ------------------------------------------
 * Input:
 * - s: string (1 <= s.length <= 12)
 * - Contains only letters and digits
 *
 * Output:
 * - string[]: All permutations of the input with different letter case combinations
 *
 * ------------------------------------------
 * Example 1:
 * Input:  "a1b2"
 * Output: ["a1b2", "a1B2", "A1b2", "A1B2"]
 *
 * Example 2:
 * Input:  "3z4"
 * Output: ["3z4", "3Z4"]
 */

function letterCasePermutation(s: string): string[] {
  const result: string[] = [];

  function backtrack(index: number, path: string): void {
    if (index === s.length) {
      result.push(path);
      return;
    }

    const char = s[index];

    if (char >= '0' && char <= '9') {
      backtrack(index + 1, path + char);
    } else {
      backtrack(index + 1, path + char.toLowerCase());
      backtrack(index + 1, path + char.toUpperCase());
    }
  }

  backtrack(0, '');
  return result;
}

// -------------------------
// Example Test Runs
// -------------------------
console.log(letterCasePermutation("a1b2")); // Expected: ["a1b2", "a1B2", "A1b2", "A1B2"]
console.log(letterCasePermutation("3z4"));  // Expected: ["3z4", "3Z4"]
console.log(letterCasePermutation("123"));  // Expected: ["123"]
