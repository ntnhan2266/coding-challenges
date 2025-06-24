function findAllDuplicateSubstrings(s: string): string[] {
    const seen = new Set<string>();
    const repeated = new Set<string>();

    for (let len = 2; len < 10; len++) {
        for (let i = 0; i <= s.length - len; i++) {
            const subStr = s.slice(i, i + len);
            if (seen.has(subStr)) {
                repeated.add(subStr)
            } else {
                seen.add(subStr)
            }
        }
    }

    return Array.from(repeated);
}

console.log(findAllDuplicateSubstrings("abcabcdef"));
// Expected: ["ab", "bc", "abc"]