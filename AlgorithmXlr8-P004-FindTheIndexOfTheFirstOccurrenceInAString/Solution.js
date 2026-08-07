const data = require('fs').readFileSync(0, 'utf-8').trim().split('\n');
const haystack = data[0];
const needle = data[1];

// Write your solution here.
// Print the index of the first occurrence of needle in haystack, or -1
// if needle does not occur in haystack.
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    let lps = [0];
    let i = 1;
    let len = 0;
    while (i < needle.length) {
        if (needle.charAt(i) == needle.charAt(len)) {
            len++;
            lps[i] = len;
            i++;
        } else {
            if (len != 0) {
                len = lps[len - 1];
            } else {
                lps[i] = 0;
                i++;
            }
        }
    }

    let iKmp = 0;
    let jKmp = 0;

    while (iKmp < haystack.length) {
        if (haystack.charAt(iKmp) == needle.charAt(jKmp)) {
            iKmp++;
            jKmp++;
            if (jKmp == needle.length) {
                return iKmp - jKmp;
            }
        } else {
            if (jKmp != 0) {
                jKmp = lps[jKmp - 1];
            } else {
                iKmp++;
            }
        }
    }
    return -1;
};

console.log(strStr(haystack,needle))