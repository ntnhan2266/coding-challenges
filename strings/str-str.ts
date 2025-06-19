/**
 * Problem: Find the Index of the First Occurrence in a String (strStr)
 * ------------------------------------------
 * Given two strings `haystack` and `needle`, return the index of the first occurrence 
 * of `needle` in `haystack`, or -1 if `needle` is not part of `haystack`.
 *
 * ------------------------------------------
 * Difficulty: Easy (LeetCode #28)
 *
 * ------------------------------------------
 * Input:
 * - haystack: string (1 <= haystack.length <= 10^4)
 * - needle: string (1 <= needle.length <= 100)
 *
 * Output:
 * - number: starting index of first occurrence, or -1 if not found
 *
 * ------------------------------------------
 * Example 1:
 * Input:  haystack = "hello", needle = "ll"
 * Output: 2
 *
 * Example 2:
 * Input:  haystack = "aaaaa", needle = "bba"
 * Output: -1
 *
 * Example 3:
 * Input:  haystack = "abc", needle = ""
 * Output: 0
 */

function strStr(haystack: string, needle: string): number {
  if (needle === '') return 0;

  for (let i = 0; i <= haystack.length - needle.length; i++) {
    if (haystack.slice(i, i + needle.length) === needle) {
      return i;
    }
  }

  return -1;
}

// -------------------------
// Example Test Runs
// -------------------------
console.log(strStr("hello", "ll"));     // Expected: 2
console.log(strStr("aaaaa", "bba"));    // Expected: -1
console.log(strStr("abc", ""));         // Expected: 0
console.log(strStr("mississippi", "issip")); // Expected: 4
