/**
 * Problem: Word Break
 * ------------------------------------------
 * Given a string `s` and a dictionary of strings `wordDict`, return true if `s` can be segmented 
 * into a space-separated sequence of one or more dictionary words.
 *
 * ------------------------------------------
 * Difficulty: Medium (LeetCode #139)
 *
 * ------------------------------------------
 * Input:
 * - s: string (1 <= s.length <= 500)
 * - wordDict: string[] (1 <= wordDict.length <= 1000, all words are non-empty and no longer than 20 characters)
 *
 * Output:
 * - boolean: true if `s` can be segmented into words in `wordDict`, false otherwise
 *
 * ------------------------------------------
 * Example 1:
 * Input:  s = "leetcode", wordDict = ["leet", "code"]
 * Output: true
 * Explanation: "leetcode" can be segmented as "leet code"
 *
 * Example 2:
 * Input:  s = "applepenapple", wordDict = ["apple", "pen"]
 * Output: true
 * Explanation: "applepenapple" -> "apple pen apple"
 *
 * Example 3:
 * Input:  s = "catsandog", wordDict = ["cats", "dog", "sand", "and", "cat"]
 * Output: false
 */

// Bottom-up Dynamic Programming
// dp[i] represents whether s[0..i-1] can be segmented
// Time complexity: O(n²), Space complexity: O(n)
function wordBreak(s: string, wordDict: string[]): boolean {
  const wordSet = new Set(wordDict);
  const dp: boolean[] = new Array(s.length + 1).fill(false);
  dp[0] = true; // empty string is always segmentable

  for (let i = 1; i <= s.length; i++) {
    for (let j = 0; j < i; j++) {
      const word = s.slice(j, i);
      if (dp[j] && wordSet.has(word)) {
        dp[i] = true;
        break;
      }
    }
  }

  return dp[s.length];
}

// Top-down Dynamic Programming with Memoization
function wordBreakMemo(s: string, wordDict: string[]): boolean {
  const wordSet = new Set(wordDict);
  const memo: Record<number, boolean> = {};

  function canBreak(start: number): boolean {
    if (start === s.length) return true;
    if (start in memo) return memo[start];

    for (let end = start + 1; end <= s.length; end++) {
      const word = s.slice(start, end);
      if (wordSet.has(word) && canBreak(end)) {
        memo[start] = true;
        return true;
      }
    }

    memo[start] = false;
    return false;
  }

  return canBreak(0);
}

// -------------------------
// Example Test Runs
// -------------------------

console.log(wordBreak("leetcode", ["leet", "code"]));             // true
console.log(wordBreak("applepenapple", ["apple", "pen"]));        // true
console.log(wordBreak("catsandog", ["cats", "dog", "sand", "and", "cat"])); // false
