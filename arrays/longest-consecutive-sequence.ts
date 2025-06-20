/**
 * Problem: Longest Consecutive Sequence
 * ------------------------------------------
 * Given an unsorted array of integers `nums`, return the length of the longest sequence of consecutive numbers.
 *
 * You must write an algorithm that runs in O(n) time.
 *
 * ------------------------------------------
 * Difficulty: Medium (LeetCode #128)
 *
 * ------------------------------------------
 * Input:
 * - nums: number[] (0 <= nums.length <= 10^5)
 *
 * Output:
 * - number: the length of the longest consecutive elements sequence
 *
 * ------------------------------------------
 * Example 1:
 * Input:  nums = [100, 4, 200, 1, 3, 2]
 * Output: 4
 * Explanation: The longest consecutive sequence is [1, 2, 3, 4].
 *
 * Example 2:
 * Input:  nums = [0,3,7,2,5,8,4,6,0,1]
 * Output: 9
 */

function longestConsecutive(nums: number[]): number {
  const numSet = new Set(nums);
  let longest = 0;

  for (const num of numSet) {
    // Only start counting if it's the start of a sequence
    if (!numSet.has(num - 1)) {
      let currentNum = num;
      let currentStreak = 1;

      while (numSet.has(currentNum + 1)) {
        currentNum++;
        currentStreak++;
      }

      longest = Math.max(longest, currentStreak);
    }
  }

  return longest;
}

function longestConsecutiveBySet(nums: number[]): number {
    const numSet = new Set<number>(nums);
    let maxLength = 0;

    for (const num of nums) {
        if (!numSet.has(num)) continue; // already visited

        numSet.delete(num); // mark as visited
        let current = num;
        let streak = 1;

        // go right
        let next = current + 1;
        while (numSet.has(next)) {
            numSet.delete(next);
            next++;
            streak++;
        }

        // go left
        let prev = current - 1;
        while (numSet.has(prev)) {
            numSet.delete(prev);
            prev--;
            streak++;
        }

        maxLength = Math.max(maxLength, streak);
    }

    return maxLength;
}

// -------------------------
// Example Test Runs
// -------------------------
console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));       // Expected: 4
console.log(longestConsecutive([0,3,7,2,5,8,4,6,0,1]));         // Expected: 9
console.log(longestConsecutive([1, 2, 0, 1]));                  // Expected: 3
console.log(longestConsecutive([]));                           // Expected: 0
