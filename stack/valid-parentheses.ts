/**
 * Problem: Valid Parentheses
 * ------------------------------------------
 * Given a string s containing just the characters '(', ')', '{', '}', '[' and ']',
 * determine if the input string is valid.
 * 
 * An input string is valid if:
 * - Open brackets are closed by the same type of brackets.
 * - Open brackets are closed in the correct order.
 * 
 * ------------------------------------------
 * Difficulty: Easy (LeetCode #20)
 * 
 * ------------------------------------------
 * Constraints:
 * - 1 <= s.length <= 10^4
 * - s consists of parentheses only: '()[]{}'
 */

function isValid(s: string): boolean {
  const stack: string[] = [];
  const map: Record<string, string> = {
    ')': '(',
    ']': '[',
    '}': '{',
  };

  for (const char of s) {
    if (char === '(' || char === '[' || char === '{') {
      stack.push(char);
    } else {
      if (stack.length === 0 || stack.pop() !== map[char]) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

// Example usage:
// Test Case 1: Simple valid
console.log(isValid("()")); 
// Expected: true

// Test Case 2: Mixed types, valid
console.log(isValid("()[]{}")); 
// Expected: true

// Test Case 3: Nested valid
console.log(isValid("{[()]}")); 
// Expected: true

// Test Case 4: Invalid closing order
console.log(isValid("(]")); 
// Expected: false

// Test Case 5: Unmatched opening
console.log(isValid("([)]")); 
// Expected: false
