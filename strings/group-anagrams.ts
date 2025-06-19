/**
 * Problem: Group Anagrams
 * --------------------------------------------------------
 * Given an array of strings `strs`, group the anagrams together.
 * You can return the answer in any order.
 *
 * Two strings are anagrams if they contain the same characters
 * in the same frequencies.
 *
 * --------------------------------------------------------
 * Difficulty: Medium (LeetCode #49)
 *
 * --------------------------------------------------------
 * Input:
 * - strs: string[] (1 <= strs.length <= 10^4, 0 <= strs[i].length <= 100)
 *
 * Output:
 * - string[][]: grouped anagrams
 *
 * --------------------------------------------------------
 * Example 1:
 * Input:  ["eat", "tea", "tan", "ate", "nat", "bat"]
 * Output: [["eat","tea","ate"],["tan","nat"],["bat"]]
 *
 * Example 2:
 * Input:  [""]
 * Output: [[""]]
 *
 * Example 3:
 * Input:  ["a"]
 * Output: [["a"]]
 */

function groupAnagrams(strs: string[]): string[][] {
  const map = new Map<string, string[]>();

  for (const word of strs) {
    const key = word.split('').sort().join('');
    if (!map.has(key)) {
      map.set(key, []);
    }
    map.get(key)!.push(word);
  }

  return Array.from(map.values());
}

// -------------------------
// Example Test Runs
// -------------------------
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
// Expected: [["eat","tea","ate"],["tan","nat"],["bat"]]

console.log(groupAnagrams([""])); // Expected: [[""]]
console.log(groupAnagrams(["a"])); // Expected: [["a"]]
