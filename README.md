# Coding Challenges

A curated collection of coding challenges with clean, well-documented TypeScript solutions.  
Each file contains the full problem statement as comments, a working solution, and inline test cases — all runnable directly in the [TypeScript Playground](https://www.typescriptlang.org/play).

## 📌 Core Data Structures
- **Array**
- **String**
- **Linked List** (singly/doubly)
- **Stack**
- **Queue & Deque**
- **Hash Map / Hash Set**
- **Heap / Priority Queue**
- **Tree** (Binary Tree, BST)
- **Trie** (Prefix Tree)
- **Graph** (adjacency list/matrix)

---

## ⚙️ Algorithms & Techniques

### Sorting & Searching
- **Binary Search** (on array / on answer)
- **Merge Sort / Quick Sort**
- **Two Pointers**
- **Sliding Window**
- **Sorting with Custom Comparator**

### Recursion & Backtracking
- **Backtracking** (N-Queens, Sudoku, Permutations)
- **Recursion with Memoization**
- **Subset generation**
- **Combination sum variants**

### Greedy
- **Interval Scheduling**
- **Huffman Coding**
- **Activity Selection**
- **Jump Game**

### Dynamic Programming (DP)
- **1D DP** (Fibonacci, House Robber)
- **2D DP** (Grid Path, Knapsack)
- **DP on Strings** (LCS, Edit Distance)
- **DP on Trees / Graphs**
- **Bitmask DP**
- **DP + Binary Search** (LIS, Job Scheduling)

### Graph Algorithms
- **DFS / BFS**
- **Topological Sort**
- **Dijkstra’s Algorithm**
- **Union-Find** (Disjoint Set Union - DSU)
- **Bellman-Ford**
- **Floyd-Warshall**
- **Minimum Spanning Tree** (Kruskal, Prim)

---

## 📐 Math & Logic
- **Bit Manipulation**
- **Number Theory** (GCD, LCM, Primes, Modulo)
- **Combinatorics / Factorial / Permutations**
- **Geometry** (area, distance, convex hull)

---

## 🧠 Advanced Topics
- **Segment Tree / Fenwick Tree** (Binary Indexed Tree)
- **Line Sweep / Sweep Line**
- **Monotonic Stack / Queue**
- **Top K Elements** (Heap / QuickSelect)
- **Binary Search Tree operations**
- **Rolling Hash / Rabin-Karp**
- **Trie + DFS** (Word Search II)
- **Matrix manipulation** (rotate, transpose)
- **Union-Find with path compression**
- **Tree Flattening / Euler Tour**

---

## 🧩 Problem Categories
- **Subarray / Substring problems**
- **Kth largest/smallest problems**
- **Interval problems**
- **Prefix Sum / Difference Array**
- **LRU Cache / LFU Cache**
- **Merge Intervals**
- **Median in Stream**
- **Design problems** (e.g., Twitter, TinyURL)
- **Scheduler / Rate Limiter**
- **Concurrency / Multi-threading** (Locking, Atomicity)

---

## 🌍 Special Topics
- **OOP & System Design** (design Twitter, LRU Cache, etc.)
- **SQL** (Leetcode database problems)
- **Shell & Bash**
- **Regex pattern matching**
- **Game Theory**
- **Multi-source BFS** (e.g., 0-1 Matrix)

Here are **20 recommended LeetCode array problems**, categorized by difficulty and pattern—perfect for your daily practice:

---

## 🟢 Easy (5)

1. **Two Sum** – Hash Map, O(n) lookup ([medium.com][1])
2. **Remove Duplicates from Sorted Array** – Two pointers ([leetcode.ca][2])
3. **Max Consecutive Ones** – Greedy/window count ([medium.com][1])
4. **Move Zeroes** – Two pointers ([leetcode.com][3])
5. **Plus One** – Simple in-place carry logic&#x20;

---

## 🟠 Medium (10)

6. **Product of Array Except Self** – Prefix & suffix products ([medium.com][1])
7. **3Sum** – Two pointers ([leetcode.ca][2])
8. **Maximum Subarray** (Kadane’s Algorithm) – Greedy/DP ([leetcode.com][3])
9. **Subarray Sum Equals K** – Hash Map & prefix sums ([blog.algomaster.io][4])
10. **Next Permutation** – Ad hoc two pointers/swapping ([leetcode.ca][2])
11. **Kth Largest Element in an Array** – Heap or Quickselect ([leetcode.com][5])
12. **Rearrange Array by Sign** – Two pointers/in-place swaps&#x20;
13. **Count Inversions** – Merge sort/count inversions&#x20;
14. **Jump Game (min jumps)** – Greedy/bfs&#x20;
15. **Intersection of Interval Lists** – Merge-process intervals&#x20;

---

## 🔴 Hard (5)

16. **Trapping Rain Water** – Two pointers/stack approach ([geeksforgeeks.org][6])
17. **First Missing Positive** – Index mapping in-place ([leetcode.ca][2])
18. **Largest Number** – Custom sort by string comparison ([leetcode.com][7])
19. **Count Subarrays with K Distinct Elements** – Sliding window/double map method ([geeksforgeeks.org][6])
20. **Smallest Subarray with Sum > x** – Sliding window ([geeksforgeeks.org][6])

---

### 🛠 Practice Plan

* Start with E → M → H blocks each day.
* Focus on **patterns** (Two pointers, sliding window, hash map, prefix sum, etc.).
* Review problem after solving: mistakes, edge cases, time/space trade-offs.

Want direct links to these problems with tags by pattern, or help scheduling your next 3 days of practice?

[1]: https://medium.com/%40johnadjanohoun/mastering-leetcode-10-common-array-questions-and-how-to-solve-them-ad61b47cfc38?utm_source=chatgpt.com "Mastering LeetCode: 10 Common Array Questions and How to ..."
[2]: https://leetcode.ca/all/problems.html?utm_source=chatgpt.com "Leetcode All Problems with Python/Java/C++ solutions"
[3]: https://leetcode.com/explore/interview/card/top-interview-questions-medium/?utm_source=chatgpt.com "Top Interview Questions – Medium - Explore - LeetCode"
[4]: https://blog.algomaster.io/p/15-leetcode-patterns?utm_source=chatgpt.com "LeetCode was HARD until I Learned these 15 Patterns"
[5]: https://leetcode.com/problems/kth-largest-element-in-an-array/?utm_source=chatgpt.com "215. Kth Largest Element in an Array - LeetCode"
[6]: https://www.geeksforgeeks.org/find-second-largest-element-array/?utm_source=chatgpt.com "Second Largest Element in an Array - GeeksforGeeks"
[7]: https://leetcode.com/problems/largest-number/?utm_source=chatgpt.com "Largest Number - LeetCode"

Here are 5 LeetCode string problems across varying difficulty levels:

---

### 🟢 Easy (2 problems)

1. **Valid Palindrome**
   **Problem**: Determine if a string is a palindrome, ignoring non-alphanumeric characters and case.
   **Link**: [LeetCode #125](https://leetcode.com/problems/valid-palindrome/)
   **Example**:
   Input: `"A man, a plan, a canal: Panama"`
   Output: `true`

2. **Implement strStr()**
   **Problem**: Return the index of the first occurrence of a substring in a string, or -1 if not found.
   **Link**: [LeetCode #28](https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/)
   **Example**:
   Input: `haystack = "hello", needle = "ll"`
   Output: `2`

---

### 🟡 Medium (2 problems)

3. **Longest Substring Without Repeating Characters**
   **Problem**: Find the length of the longest substring without repeating characters.
   **Link**: [LeetCode #3](https://leetcode.com/problems/longest-substring-without-repeating-characters/)
   **Example**:
   Input: `"abcabcbb"`
   Output: `3`

4. **Group Anagrams**
   **Problem**: Group words that are anagrams of each other.
   **Link**: [LeetCode #49](https://leetcode.com/problems/group-anagrams/)
   **Example**:
   Input: `["eat", "tea", "tan", "ate", "nat", "bat"]`
   Output: `[["eat","tea","ate"],["tan","nat"],["bat"]]`

---

### 🔴 Hard (1 problem)

5. **Wildcard Matching**
   **Problem**: Implement wildcard pattern matching with `?` (matches any single character) and `*` (matches any sequence).
   **Link**: [LeetCode #44](https://leetcode.com/problems/wildcard-matching/)
   **Example**:
   Input: `s = "adceb", p = "*a*b"`
   Output: `true`

---

Let me know if you want another set, e.g., focused on **sliding window**, **two pointers**, or **regex-based** string problems.
