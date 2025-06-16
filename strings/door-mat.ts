/**
 * Problem: Door Mat Pattern Generator
 * ------------------------------------------
 * You are given the dimensions of a door mat: rows (n) and columns (m).
 * Your task is to print a mat pattern with the following rules:
 *
 * - The mat is always of size `n x m` where n is an odd number and m is 3 times n.
 * - The design pattern uses only `.`, `|`, and `WELCOME`.
 * - The pattern grows with `.|.` repeated:
 *   - Top half: increasing pattern
 *   - Middle: 'WELCOME' centered
 *   - Bottom half: mirror of top
 *
 * ------------------------------------------
 * Input:
 * - n: number (odd, 5 <= n < 101)
 * - m: number (m = 3 * n)
 * 
 * Output:
 * - Print the pattern line-by-line
 *
 * ------------------------------------------
 * Example Input:
 * n = 7
 * m = 21
 *
 * Output:
 * ---------.|.---------
 * ------.|..|..|.------
 * ---.|..|..|..|..|.---
 * -------WELCOME-------
 * ---.|..|..|..|..|.---
 * ------.|..|..|.------
 * ---------.|.---------
 */

function printDoorMat(n: number, m: number): void {
  const pattern: string[] = [];

  // Top half
  for (let i = 1; i < n; i += 2) {
    const design = '.|.'.repeat(i);
    pattern.push(design.padStart((m + design.length) / 2, '-').padEnd(m, '-'));
  }

  // Middle
  pattern.push('WELCOME'.padStart((m + 7) / 2, '-').padEnd(m, '-'));

  // Bottom half (mirror of top)
  for (let i = n - 2; i >= 1; i -= 2) {
    const design = '.|.'.repeat(i);
    pattern.push(design.padStart((m + design.length) / 2, '-').padEnd(m, '-'));
  }

  // Print pattern
  pattern.forEach(line => console.log(line));
}

// -------------------------
// Example Test Run
// -------------------------
printDoorMat(7, 21);

/*
Expected Output:
---------.|.---------
------.|..|..|.------
---.|..|..|..|..|.---
-------WELCOME-------
---.|..|..|..|..|.---
------.|..|..|.------
---------.|.---------
*/
