/**
 * Problem: Longest Common Prefix
 * ------------------------------------------
 * Write a function to find the longest common prefix string among an array of strings.
 * If there is no common prefix, return an empty string "".
 *
 * ------------------------------------------
 * Difficulty: Easy (LeetCode #14)
 *
 * ------------------------------------------
 * Input:
 * - strs: string[] (1 <= strs.length <= 200, 0 <= strs[i].length <= 200)
 *
 * Output:
 * - A string: the longest common prefix
 *
 * ------------------------------------------
 * Example 1:
 * Input:  ["flower","flow","flight"]
 * Output: "fl"
 *
 * Example 2:
 * Input:  ["dog","racecar","car"]
 * Output: ""
 */

function longestCommonPrefix(strs: string[]): string {
  if (strs.length === 1) return strs[0];
  let prefix = strs[0];
  for (let i = 1; i < strs.length; i++) {
    const str = strs[i];
    for (let j = 0; j < prefix.length; j++) {
      if (prefix.charAt(j) !== str.charAt(j)) {
        prefix = prefix.slice(0, j);
        break;
      }
    }
  }
  return prefix;
}

// -------------------------
// Example Test Runs
// -------------------------
console.log(longestCommonPrefix(["flower", "flow", "flight"])); // Expected: "fl"
console.log(longestCommonPrefix(["dog", "racecar", "car"]));     // Expected: ""
console.log(longestCommonPrefix(["interview", "interact", "internet"])); // Expected: "inter"
