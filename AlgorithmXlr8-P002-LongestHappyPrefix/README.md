<p align="center"><img src="https://algorithmxlr8.io/logo-mark.png" width="56" alt="AlgorithmXlr8.io logo" /></p>
<h3 align="center">AlgorithmXlr8.io</h3>
<p align="center"><sub>Solved and synced automatically from <a href="https://algorithmxlr8.io">AlgorithmXlr8.io</a></sub></p>

---

# Longest Happy Prefix

**Difficulty:** `Hard`

## Problem

A string is called a happy prefix if it is a non-empty prefix of itself that is also a suffix of itself (excluding the whole string).

Given a string s, return the longest happy prefix of s. If no such prefix exists (for example, a string like asdf, where no prefix is also a suffix), return an empty string.

Read s from standard input, and print the longest happy prefix (or an empty line if none exists) to standard output.

## Examples

### Example 1

**Input**
```
level
```
**Output**
```
l
```

**Explanation:** l is both a prefix and a suffix of level, and no longer prefix works.

### Example 2

**Input**
```
ababab
```
**Output**
```
abab
```

**Explanation:** abab is both a prefix and a suffix, and it's the longest one that works.

### Example 3

**Input**
```
leetcodeleet
```
**Output**
```
leet
```

**Explanation:** leet appears both at the very start and the very end of the string.

---

Solved on [AlgorithmXlr8.io](https://algorithmxlr8.io/solve-dsa/longest-happy-prefix).