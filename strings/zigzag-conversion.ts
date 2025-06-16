/**
 * Problem: ZigZag Conversion
 * ------------------------------------------
 * The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows
 * like this (you may want to display this pattern in a fixed font):
 *
 * P   A   H   N  
 * A P L S I I G  
 * Y   I   R
 *
 * And then read line by line: "PAHNAPLSIIGYIR"
 *
 * Write the code that will take a string and make this conversion given a number of rows.
 *
 * ------------------------------------------
 * Difficulty: Medium (LeetCode #6)
 *
 * ------------------------------------------
 * Input:
 * - s: string (1 <= s.length <= 1000)
 * - numRows: number (1 <= numRows <= 1000)
 *
 * Output:
 * - string: the zigzag-converted string
 *
 * ------------------------------------------
 * Example 1:
 * Input:  s = "PAYPALISHIRING", numRows = 3
 * Output: "PAHNAPLSIIGYIR"
 *
 * Example 2:
 * Input:  s = "PAYPALISHIRING", numRows = 4
 * Output: "PINALSIGYAHRPI"
 */

function convertZigZag(s: string, numRows: number): string {
  if (numRows === 1 || s.length <= numRows) return s;

  const rows: string[] = new Array(numRows).fill('');
  let currentRow = 0;
  let goingDown = false;

  for (const char of s) {
    rows[currentRow] += char;

    if (currentRow === 0 || currentRow === numRows - 1) {
      goingDown = !goingDown;
    }

    currentRow += goingDown ? 1 : -1;
  }

  return rows.join('');
}

// -------------------------
// Example Test Runs
// -------------------------
console.log(convertZigZag("PAYPALISHIRING", 3)); // Expected: "PAHNAPLSIIGYIR"
console.log(convertZigZag("PAYPALISHIRING", 4)); // Expected: "PINALSIGYAHRPI"
console.log(convertZigZag("ABCD", 2));           // Expected: "ACBD"
