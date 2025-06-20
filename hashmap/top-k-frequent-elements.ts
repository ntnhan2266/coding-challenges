/**
 * Problem: Top K Frequent Elements
 * ------------------------------------------
 * Given an integer array `nums` and an integer `k`, return the `k` most frequent elements.
 * You may return the answer in any order.
 *
 * ------------------------------------------
 * Difficulty: Medium (LeetCode #347)
 *
 * ------------------------------------------
 * Input:
 * - nums: number[] (1 <= nums.length <= 10^5)
 * - k: number (1 <= k <= unique elements in nums)
 *
 * Output:
 * - number[]: array containing `k` most frequent elements, order not guaranteed
 *
 * ------------------------------------------
 * Example 1:
 * Input:  nums = [1,1,1,2,2,3], k = 2
 * Output: [1,2]
 *
 * Example 2:
 * Input:  nums = [1], k = 1
 * Output: [1]
 *
 * Example 3:
 * Input:  nums = [4,1,-1,2,-1,2,3], k = 2
 * Output: [-1,2]
 */

function topKFrequent(nums: number[], k: number): number[] {
  const freqMap = new Map<number, number>();

  // Count frequency of each number
  for (const num of nums) {
    freqMap.set(num, (freqMap.get(num) || 0) + 1);
  }

  // Use a min-heap (priority queue) of size k
  const heap: [number, number][] = [];

  for (const [num, freq] of freqMap.entries()) {
    heap.push([freq, num]);
    heap.sort((a, b) => a[0] - b[0]); // Min-heap based on frequency

    if (heap.length > k) {
      heap.shift(); // Remove the element with the smallest frequency
    }
  }

  // Extract the elements from the heap
  return heap.map(([_, num]) => num);
}

// -------------------------
// Example Test Runs
// -------------------------
console.log(topKFrequent([1,1,1,2,2,3], 2));       // Expected: [1,2]
console.log(topKFrequent([1], 1));                 // Expected: [1]
console.log(topKFrequent([4,1,-1,2,-1,2,3], 2));   // Expected: [-1,2]
