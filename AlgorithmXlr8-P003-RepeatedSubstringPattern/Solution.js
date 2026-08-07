const s = require('fs').readFileSync(0, 'utf-8').trim();

// Write your solution here.
// Print "true" if s can be built by repeating some substring of it two
// or more times, otherwise print "false".
/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function (s) {
    let lps = [0];
    let len = 0;
    let i = 1;
    while (i < s.length) {
        if (s.charAt(i) == s.charAt(len)) {
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
    if (lps[lps.length - 1] == 0) return false;
    let subString = s.substring(0, s.length - lps[lps.length - 1])
    if (s.length % subString.length !== 0) return false;
    return true;
};

console.log(repeatedSubstringPattern(s))