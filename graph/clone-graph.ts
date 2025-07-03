/**
 * Problem: Clone Graph
 * ----------------------------------------------------
 * Given a reference of a node in a connected undirected graph,
 * return a deep copy (clone) of the graph.
 *
 * Each node in the graph contains a value (int) and a list (Array) of its neighbors.
 *
 * class GraphNode {
 *     val: number
 *     neighbors: GraphNode[]
 *     constructor(val?: number, neighbors?: GraphNode[]) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.neighbors = (neighbors===undefined ? [] : neighbors)
 *     }
 * }
 *
 * ----------------------------------------------------
 * Difficulty: Medium (LeetCode #133)
 *
 * ----------------------------------------------------
 * Input:
 * - node: GraphNode | null (A reference to a node in the graph)
 *
 * Output:
 * - GraphNode | null (The cloned graph node reference)
 *
 * ----------------------------------------------------
 * Constraints:
 * - Number of nodes in the graph is in the range [0, 100].
 * - 1 <= GraphNode.val <= 100
 * - GraphNode.val is unique for each node.
 * - There are no repeated edges and no self-loops in the graph.
 */

/**
 * Performs a BFS traversal and clones the graph node by node.
 * Uses a Map to record already-cloned nodes to handle cycles.
 */

class GraphNode {
  val: number
  neighbors: GraphNode[]
  constructor(val?: number, neighbors?: GraphNode[]) {
    this.val = (val === undefined ? 0 : val)
    this.neighbors = (neighbors === undefined ? [] : neighbors)
  }
}

function cloneGraph(node: GraphNode | null): GraphNode | null {
  if (!node) return null;

  // Map from original node to its clone
  const map = new Map<GraphNode, GraphNode>();

  // Initialize queue with the first node, clone the first node
  const queue: GraphNode[] = [node];
  map.set(node, new GraphNode(node.val));

  while (queue.length > 0) {
    const curr = queue.shift()!;
    for (const neighbor of curr.neighbors) {
      // Clone neighbor if not cloned yet
      if (!map.has(neighbor)) {
        map.set(neighbor, new GraphNode(neighbor.val));
        queue.push(neighbor);
      }
      // Add cloned neighbor to cloned node's neighbor list
      map.get(curr)!.neighbors.push(map.get(neighbor)!);
    }
  }

  return map.get(node)!;
}

// Helper function to build a graph from adjacency list
function buildGraph(adjList: number[][]): GraphNode | null {
    if (adjList.length === 0) return null;
    const nodes = adjList.map((_, idx) => new GraphNode(idx + 1));
    for (let i = 0; i < adjList.length; i++) {
        nodes[i].neighbors = adjList[i].map(j => nodes[j - 1]);
    }
    return nodes[0];
}

// Helper to print a graph as adjacency list (for checking clone)
function printGraph(node: GraphNode | null): number[][] {
    if (!node) return [];
    const map = new Map<GraphNode, number>();
    const res: number[][] = [];
    const queue: GraphNode[] = [node];
    let idx = 0;
    while (queue.length > 0) {
        const curr = queue.shift()!;
        if (map.has(curr)) continue;
        map.set(curr, idx++);
        res.push(curr.neighbors.map(n => n.val));
        for (const neighbor of curr.neighbors) {
            if (!map.has(neighbor)) queue.push(neighbor);
        }
    }
    return res;
}

// Test 1: Simple two-node graph
let node = buildGraph([[2], [1]]);
let clone = cloneGraph(node);
console.log(printGraph(clone)); // [[2], [1]]

// Test 2: Triangle
node = buildGraph([[2,3], [1,3], [1,2]]);
clone = cloneGraph(node);
console.log(printGraph(clone)); // [[2,3], [1,3], [1,2]]

// Test 3: Single node
node = buildGraph([[]]);
clone = cloneGraph(node);
console.log(printGraph(clone)); // [[]]

// Test 4: Empty graph
node = buildGraph([]);
clone = cloneGraph(node);
console.log(printGraph(clone)); // []

// Test 5: Line graph
node = buildGraph([[2], [1,3], [2]]);
clone = cloneGraph(node);
console.log(printGraph(clone)); // [[2], [1,3], [2]]
