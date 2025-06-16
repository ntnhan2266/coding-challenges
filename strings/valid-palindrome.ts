/**
 * Problem: Valid Palindrome
 * ------------------------------------------
 * A phrase is a palindrome if, after converting all uppercase letters into lowercase letters 
 * and removing all non-alphanumeric characters, it reads the same forward and backward.
 *
 * Return true if the given string is a palindrome, or false otherwise.
 *
 * ------------------------------------------
 * Difficulty: Easy (LeetCode #125)
 *
 * ------------------------------------------
 * Input:
 * - s: string (1 <= s.length <= 2 * 10^5)
 *
 * Output:
 * - boolean: true if the string is a valid palindrome
 *
 * ------------------------------------------
 * Example 1:
 * Input:  "A man, a plan, a canal: Panama"
 * Output: true
 *
 * Example 2:
 * Input:  "race a car"
 * Output: false
 */

function isPalindrome(s: string): boolean {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    while (left < right && !isAlphaNumeric(s[left])) left++;
    while (left < right && !isAlphaNumeric(s[right])) right--;

    if (s[left].toLowerCase() !== s[right].toLowerCase()) {
      return false;
    }

    left++;
    right--;
  }

  return true;
}

function isAlphaNumeric(c: string): boolean {
  return /^[a-z0-9]$/i.test(c);
}

// -------------------------
// Example Test Runs
// -------------------------
console.log(isPalindrome("A man, a plan, a canal: Panama")); // Expected: true
console.log(isPalindrome("race a car"));                      // Expected: false
console.log(isPalindrome(" "));                               // Expected: true
