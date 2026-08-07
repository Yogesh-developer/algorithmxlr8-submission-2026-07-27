const s = require('fs').readFileSync(0, 'utf-8').trim();

// Write your solution here.
// Print the longest happy prefix of s (a non-empty prefix that is also a
// suffix, excluding the whole string itself), or an empty line if none exists.

/**
 * @param {string} s
 * @return {string}
 */
var longestPrefix = function(s) {
    let len = 0, n = s.length, i = 1;
    let lps = Array(n).fill(0);
    
    while(i < n){
        if(s[i] === s[len]){
            len++
            lps[i] = len;
            i++
        }else{
            if(len !== 0){
                len = lps[len - 1]
               
            }else{
                lps[i] = 0;
                i++
            }
        }
    }
   
    return s.slice(0, lps[n-1])
    
};

console.log(longestPrefix(s))