/**
 * Problem: Find All Anagrams in a String
 * ------------------------------------------
 * Given two strings `s` and `p`, return a list of all the start indices in `s`
 * where `p`'s anagram is a substring of `s`.
 *
 * An anagram is a permutation of all characters — same frequency but possibly different order.
 *
 * ------------------------------------------
 * Difficulty: Medium (LeetCode #438)
 *
 * ------------------------------------------
 * Input:
 * - s: string (1 <= s.length <= 3 * 10^4)
 * - p: string (1 <= p.length <= 3 * 10^4)
 *
 * Output:
 * - number[]: all starting indices of anagrams of `p` in `s`
 *
 * ------------------------------------------
 * Example 1:
 * Input:  s = "cbaebabacd", p = "abc"
 * Output: [0, 6]  // "cba" at index 0, "bac" at index 6
 *
 * Example 2:
 * Input:  s = "abab", p = "ab"
 * Output: [0, 1, 2]
 */

function findAnagrams(s: string, p: string): number[] {
  const result: number[] = [];
  const need = new Map<string, number>();
  const window = new Map<string, number>();

  for (const char of p) {
    need.set(char, (need.get(char) || 0) + 1);
  }

  let left = 0;
  let right = 0;
  let valid = 0;

  while (right < s.length) {
    const c = s[right];
    right++;

    if (need.has(c)) {
      window.set(c, (window.get(c) || 0) + 1);
      if (window.get(c) === need.get(c)) {
        valid++;
      }
    }

    while (right - left >= p.length) {
      if (valid === need.size) {
        result.push(left);
      }

      const d = s[left];
      left++;

      if (need.has(d)) {
        if (window.get(d) === need.get(d)) {
          valid--;
        }
        window.set(d, window.get(d)! - 1);
      }
    }
  }

  return result;
}

// -------------------------
// Example Test Runs
// -------------------------
console.log(findAnagrams("cbaebabacd", "abc")); // Expected: [0, 6]
console.log(findAnagrams("abab", "ab"));        // Expected: [0, 1, 2]
