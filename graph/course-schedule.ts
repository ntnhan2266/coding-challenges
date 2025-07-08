/**
 * Problem: Course Schedule
 * ------------------------------------------
 * There are a total of `numCourses` courses you have to take, labeled from 0 to numCourses - 1.
 * Some courses may have prerequisites — given as pairs [a, b], meaning to take course `a` you must first take course `b`.
 * 
 * Return true if it is possible to finish all courses (i.e., the graph has no cycle), otherwise return false.
 * 
 * ------------------------------------------
 * Difficulty: Medium (LeetCode #207)
 * 
 * ------------------------------------------
 * Constraints:
 * - 1 <= numCourses <= 2000
 * - 0 <= prerequisites.length <= 5000
 * - prerequisites[i].length == 2
 * - 0 <= a, b < numCourses
 */

function canFinish(numCourses: number, prerequisites: number[][]): boolean {
  const graph: number[][] = Array.from({ length: numCourses }, () => []);
  const visited: number[] = Array(numCourses).fill(0); // 0=unvisited, 1=visiting, 2=visited

  for (const [course, pre] of prerequisites) {
    graph[pre].push(course);
  }

  function hasCycle(course: number): boolean {
    if (visited[course] === 1) return true;  // cycle
    if (visited[course] === 2) return false; // already checked

    visited[course] = 1; // mark as visiting
    for (const neighbor of graph[course]) {
      if (hasCycle(neighbor)) return true;
    }
    visited[course] = 2; // mark as safe
    return false;
  }

  for (let i = 0; i < numCourses; i++) {
    if (hasCycle(i)) return false;
  }

  return true;
}

// Test Case 1: No prerequisites
console.log(canFinish(2, [])); 
// Expected: true

// Test Case 2: Simple dependency chain
console.log(canFinish(2, [[1, 0]])); 
// Expected: true

// Test Case 3: Simple cycle
console.log(canFinish(2, [[1, 0], [0, 1]])); 
// Expected: false

// Test Case 4: Complex graph with no cycles
console.log(canFinish(4, [[1, 0], [2, 1], [3, 2]])); 
// Expected: true

// Test Case 5: Complex graph with a cycle
console.log(canFinish(4, [[1, 0], [2, 1], [0, 2]])); 
// Expected: false
