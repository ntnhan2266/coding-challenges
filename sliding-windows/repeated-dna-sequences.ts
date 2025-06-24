/**
 * Problem: Repeated DNA Sequences
 * ------------------------------------------
 * The DNA sequence is a string composed of the characters 'A', 'C', 'G', and 'T'.
 * Write a function to find all the 10-letter-long sequences (substrings) that occur
 * more than once in a DNA molecule.
 *
 * ------------------------------------------
 * Difficulty: Medium (LeetCode #187)
 *
 * ------------------------------------------
 * Input:
 * - s: string (1 <= s.length <= 10^5, only A/C/G/T)
 *
 * Output:
 * - string[]: list of 10-letter-long sequences that appear more than once
 *
 * ------------------------------------------
 * Example:
 * Input:  s = "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"
 * Output: ["AAAAACCCCC", "CCCCCAAAAA"]
 */

function findRepeatedDnaSequences(s: string): string[] {
  const SEQ_LEN = 10;
  const seen = new Set<string>();
  const repeated = new Set<string>();

  for (let i = 0; i <= s.length - SEQ_LEN; i++) {
    const substr = s.substring(i, i + SEQ_LEN);
    if (seen.has(substr)) {
      repeated.add(substr);
    } else {
      seen.add(substr);
    }
  }

  return Array.from(repeated);
}

// -------------------------
// Example Test Run
// -------------------------
console.log(findRepeatedDnaSequences("AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"));
// Expected: ["AAAAACCCCC", "CCCCCAAAAA"]
console.log(findRepeatedDnaSequences("AAAAAAAAAAAAA"));
// Expected: ["AAAAAAAAAA"]
console.log(findRepeatedDnaSequences("AAGCTAGCTAGCTAGCTAGCTAGCTAGC"));
// Expected: ["AGCTAGCTAG", "GCTAGCTAGC", "CTAGCTAGCT", "TAGCTAGCTA"] 
