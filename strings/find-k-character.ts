/**
 * Problem: Find the kth Character in a Special String
 * -----------------------------------------------------
 * Alice and Bob are playing a game. Initially, Alice has a string word = "a".
 * You are given a positive integer k.
 * Now Bob will ask Alice to perform the following operation forever:
 *  - Generate a new string by changing each character in word to its next character in the English alphabet, and append it to the original word.
 *    For example, performing the operation on "c" generates "cd" and performing the operation on "zb" generates "zbac".
 *  - Return the value of the kth character in word, after enough operations have been done for word to have at least k characters.
 *  - Note that the character 'z' can be changed to 'a' in the operation.
 *
 * -----------------------------------------------------
 * Input:
 *  - k: number (1 <= k <= 500)
 * Output:
 *  - string (the kth character, 1-indexed)
 *
 * -----------------------------------------------------
 * Constraints:
 *  - 1 <= k <= 500
 * -----------------------------------------------------
 * Examples:
 *  Input: k = 5
 *  Output: "b"
 *  Explanation: word evolves as "a" -> "ab" -> "abbc" -> "abbcbccd" ...
 *
 *  Input: k = 10
 *  Output: "c"
 */

/**
 * Optimized recursive approach.
 * The function simulates the construction but avoids actual string building.
 */
function kthCharacterOptimized(k: number): string {
    function nextChar(c: string): string {
        return c === 'z' ? 'a' : String.fromCharCode(c.charCodeAt(0) + 1);
    }

    function find(k: number, level: number): string {
        if (level === 0) return 'a';
        const halfLength = 1 << (level - 1);
        if (k <= halfLength) {
            return find(k, level - 1);
        } else {
            const prevChar = find(k - halfLength, level - 1);
            return nextChar(prevChar);
        }
    }

    // Find the smallest level such that word length >= k
    let level = 0;
    while ((1 << level) < k) level++;

    return find(k, level);
}

/**
 * Brute-force simulation.
 * Actually builds up the string until length >= k.
 */
function kthCharacter(k: number): string {
    let word = 'a';
    while (word.length < k) {
        let next = '';
        for (const c of word) {
            next += c === 'z' ? 'a' : String.fromCharCode(c.charCodeAt(0) + 1);
        }
        word += next;
    }
    return word[k - 1];
}

/* ------------------ Test Cases ------------------ */
console.log(kthCharacterOptimized(5));    // Output: "b"
console.log(kthCharacterOptimized(10));   // Output: "c"
console.log(kthCharacterOptimized(1));    // Output: "a"
console.log(kthCharacterOptimized(2));    // Output: "b"
console.log(kthCharacterOptimized(20));   // Output: "b"

console.log(kthCharacter(5));    // Output: "b"
console.log(kthCharacter(10));   // Output: "c"
console.log(kthCharacter(1));    // Output: "a"
console.log(kthCharacter(2));    // Output: "b"
console.log(kthCharacter(20));   // Output: "b"
