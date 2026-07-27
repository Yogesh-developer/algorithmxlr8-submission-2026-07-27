const data = require('fs').readFileSync(0, 'utf-8').trim().split('\n');
const a = data[0];
const b = data[1];

// Write your solution here.
// Print the minimum number of times a must be repeated so that b becomes
// a substring of the repeated string, or -1 if it's impossible.

/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */

var repeatedStringMatch = function (a, b) {
    let repeated = a;
    let count = 1;

    while (repeated.length < b.length) {
        repeated += a;
        count++;
    }

    if (rabinKarp(repeated, b)) return count;

    repeated += a;

    if (rabinKarp(repeated, b)) return count + 1;

    return -1;
};

function rabinKarp(text, pattern) {
    const BASE = 31;
    const MOD = 1000000007;

    const n = text.length;
    const m = pattern.length;

    if (m > n) return false;

    let patternHash = 0;
    let windowHash = 0;
    let power = 1;

    // BASE^(m-1)
    for (let i = 1; i < m; i++) {
        power = (power * BASE) % MOD;
    }

    // Initial hashes
    for (let i = 0; i < m; i++) {
        patternHash = (patternHash * BASE + pattern.charCodeAt(i)) % MOD;
        windowHash = (windowHash * BASE + text.charCodeAt(i)) % MOD;
    }

    for (let i = 0; i <= n - m; i++) {

        if (patternHash === windowHash) {
            let match = true;

            for (let j = 0; j < m; j++) {
                if (text[i + j] !== pattern[j]) {
                    match = false;
                    break;
                }
            }

            if (match) return true;
        }

        if (i < n - m) {
            windowHash =
                (windowHash -
                    (text.charCodeAt(i) * power) % MOD +
                    MOD) % MOD;

            windowHash =
                (windowHash * BASE + text.charCodeAt(i + m)) % MOD;
        }
    }

    return false;
}

console.log(repeatedStringMatch(a,b))