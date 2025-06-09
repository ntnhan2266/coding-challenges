/**
 * Problem: Minimum Platforms Required
 * ------------------------------------------
 * Given arrival and departure times of trains, return the minimum number of platforms
 * needed at the station so that no train waits.
 *
 * ------------------------------------------
 * Input:
 * - arr: number[] => Arrival times in hhmm format
 * - dep: number[] => Departure times in hhmm format
 * - Both arrays are of same length n (1 <= n <= 10^5)
 *
 * Output:
 * - A single integer representing the minimum platforms required.
 *
 * ------------------------------------------
 * Example:
 * Input:
 *   arr = [900, 940, 950, 1100, 1500, 1800]
 *   dep = [910, 1200, 1120, 1130, 1900, 2000]
 *
 * Output: 3
 */

export function findMinimumPlatforms(arr: number[], dep: number[]): number {
  const n = arr.length;
  const arrivals = arr.slice().sort((a, b) => a - b);
  const departures = dep.slice().sort((a, b) => a - b);
  let platformsNeeded = 0;
  let maxPlatforms = 0;
  let i = 0, j = 0;
  while (i < n && j < n) {
    if (arrivals[i] <= departures[j]) {
      // A train arrives, increase the platform count
      platformsNeeded++;
      maxPlatforms = Math.max(maxPlatforms, platformsNeeded);
      i++;
    } else {
      // A train departs, decrease the platform count
      platformsNeeded--;
      j++;
    }
  }
  return maxPlatforms;
}

// -------------------------
// Example Test Runs
// -------------------------
console.log(findMinimumPlatforms(
  [900, 940, 950, 1100, 1500, 1800],
  [910, 1200, 1120, 1130, 1900, 2000]
)); // Expected: 3
console.log(findMinimumPlatforms(
  [1000, 1010, 1030, 1100],
  [1020, 1040, 1110, 1200]
)); // Expected: 2
console.log(findMinimumPlatforms(
  [800, 830, 900, 930],
  [820, 850, 910, 940]
)); // Expected: 1
