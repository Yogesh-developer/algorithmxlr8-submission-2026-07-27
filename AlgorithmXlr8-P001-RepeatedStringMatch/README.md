<p align="center"><img src="https://algorithmxlr8.io/logo-mark.png" width="56" alt="AlgorithmXlr8.io logo" /></p>
<h3 align="center">AlgorithmXlr8.io</h3>
<p align="center"><sub>Solved and synced automatically from <a href="https://algorithmxlr8.io">AlgorithmXlr8.io</a></sub></p>

---

# Repeated String Match

**Difficulty:** `Medium`

## Problem

Given two strings a and b, return the minimum number of times a must be repeated so that b becomes a substring of the repeated string. If this is never possible, return -1.

Read a on the first line and b on the second line of standard input, and print the answer to standard output.

## Examples

### Example 1

**Input**
```
abcd
cdabcdab
```
**Output**
```
3
```

**Explanation:** Repeating abcd 3 times gives abcdabcdabcd, which contains cdabcdab starting at index 2.

### Example 2

**Input**
```
a
aa
```
**Output**
```
2
```

**Explanation:** a alone is too short; repeating it twice, aa, contains aa.

---

Solved on [AlgorithmXlr8.io](https://algorithmxlr8.io/solve-dsa/repeated-string-match).