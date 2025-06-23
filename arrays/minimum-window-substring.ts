/**
 * Problem: Minimum Window Substring
 * ------------------------------------------
 * Given two strings `s` and `t`, return the minimum window in `s` which contains all the characters in `t` (including duplicates).
 * If there is no such window, return the empty string "".
 *
 * Note: The result must be a substring of `s`.
 *
 * ------------------------------------------
 * Difficulty: Hard (LeetCode #76)
 *
 * ------------------------------------------
 * Input:
 * - s: string (1 <= s.length <= 10^5)
 * - t: string (1 <= t.length <= 10^4)
 *
 * Output:
 * - string: the minimum window substring in `s` that contains all characters from `t`
 *
 * ------------------------------------------
 * Example 1:
 * Input:  s = "ADOBECODEBANC", t = "ABC"
 * Output: "BANC"
 *
 * Example 2:
 * Input:  s = "a", t = "a"
 * Output: "a"
 *
 * Example 3:
 * Input:  s = "a", t = "aa"
 * Output: ""
 */

function minWindow(s: string, t: string): string {
  if (t.length > s.length) return "";

  const need = new Map<string, number>();
  const window = new Map<string, number>();

  for (const char of t) {
    need.set(char, (need.get(char) || 0) + 1);
  }

  let left = 0;
  let right = 0;
  let valid = 0;
  let start = 0;
  let minLen = Infinity;

  while (right < s.length) {
    const c = s[right];
    right++;

    if (need.has(c)) {
      window.set(c, (window.get(c) || 0) + 1);
      if (window.get(c) === need.get(c)) {
        valid++;
      }
    }

    while (valid === need.size) {
      if (right - left < minLen) {
        start = left;
        minLen = right - left;
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

  return minLen === Infinity ? "" : s.slice(start, start + minLen);
}

// -------------------------
// Example Test Runs
// -------------------------
console.log(minWindow("ADOBECODEBANC", "ABC")); // Expected: "BANC"
console.log(minWindow("a", "a"));               // Expected: "a"
console.log(minWindow("a", "aa"));              // Expected: ""
