/**
 * Problem: sWAP cASE
 * ------------------------------------------
 * You are given a string. Your task is to swap the case of each character.
 * 
 * That means:
 * - Uppercase letters become lowercase
 * - Lowercase letters become uppercase
 * - Digits and symbols remain unchanged
 *
 * ------------------------------------------
 * Difficulty: Easy (HackerRank warmup)
 *
 * ------------------------------------------
 * Input:
 * - s: string (1 <= s.length <= 1000)
 *
 * Output:
 * - string: a new string with swapped case for each character
 *
 * ------------------------------------------
 * Example 1:
 * Input:  "HackerRank.com presents \"Pythonist 2\"."
 * Output: "hACKERrANK.COM PRESENTS \"pYTHONIST 2\"."
 */

function swapCase(s: string): string {
  let result = '';

  for (const char of s) {
    const isLower = char >= 'a' && char <= 'z';
    const isUpper = char >= 'A' && char <= 'Z';

    if (isLower) {
      result += char.toUpperCase();
    } else if (isUpper) {
      result += char.toLowerCase();
    } else {
      result += char;
    }
  }

  return result;
}

// -------------------------
// Example Test Runs
// -------------------------
console.log(swapCase('HackerRank.com presents "Pythonist 2".'));
// Expected: 'hACKERrANK.COM PRESENTS "pYTHONIST 2".'

console.log(swapCase('AbC123!@#'));
// Expected: 'aBc123!@#'
