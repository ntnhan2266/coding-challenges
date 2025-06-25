/**
 * Problem: Valid Palindrome
 * ------------------------------------------
 * Given a string `s`, determine if it is a palindrome,
 * considering only alphanumeric characters and ignoring cases.
 *
 * ------------------------------------------
 * Difficulty: Easy (LeetCode #125)
 *
 * ------------------------------------------
 * Input:
 * - s: string (1 <= s.length <= 2 * 10^5)
 *
 * Output:
 * - boolean: true if `s` is a valid palindrome, false otherwise
 *
 * ------------------------------------------
 * Example 1:
 * Input:  s = "A man, a plan, a canal: Panama"
 * Output: true
 *
 * Example 2:
 * Input:  s = "race a car"
 * Output: false
 */

function isPalindrome(s: string): boolean {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    while (left < right && !isAlphaNumeric(s[left])) left++;
    while (left < right && !isAlphaNumeric(s[right])) right--;

    if (s[left].toLowerCase() !== s[right].toLowerCase()) return false;

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

console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome("race a car"));                      // false
console.log(isPalindrome(" "));                               // true
console.log(isPalindrome("0P"));                              // false
console.log(isPalindrome("Madam"));                           // true
console.log(isPalindrome("Able , was I saw eLba"));           // true
