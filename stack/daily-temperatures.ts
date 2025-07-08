/**
 * Problem: Daily Temperatures
 * ------------------------------------------
 * Given an array of integers temperatures represents the daily temperatures,
 * return an array answer such that answer[i] is the number of days you have to wait 
 * after the i-th day to get a warmer temperature.
 * If there is no future day for which this is possible, put 0 instead.
 * 
 * ------------------------------------------
 * Difficulty: Medium (LeetCode #739)
 * 
 * ------------------------------------------
 * Constraints:
 * - 1 <= temperatures.length <= 10^5
 * - 30 <= temperatures[i] <= 100
 */

function dailyTemperatures(temperatures: number[]): number[] {
  const n = temperatures.length;
  const result = new Array(n).fill(0);
  const stack: number[] = []; // stores indices

  for (let i = 0; i < n; i++) {
    while (stack.length && temperatures[i] > temperatures[stack[stack.length - 1]]) {
      const prevIndex = stack.pop()!;
      result[prevIndex] = i - prevIndex;
    }
    stack.push(i);
  }

  return result;
}

// Test cases
// Test Case 1: Basic input
console.log(dailyTemperatures([73,74,75,71,69,72,76,73])); 
// Expected: [1,1,4,2,1,1,0,0]

// Test Case 2: Descending temperatures
console.log(dailyTemperatures([100,99,98,97])); 
// Expected: [0,0,0,0]

// Test Case 3: All same temperature
console.log(dailyTemperatures([70,70,70,70])); 
// Expected: [0,0,0,0]

// Test Case 4: Single temperature
console.log(dailyTemperatures([50])); 
// Expected: [0]

// Test Case 5: Zigzag temperatures
console.log(dailyTemperatures([30,60,90,60,30,90])); 
// Expected: [1,1,0,2,1,0]
