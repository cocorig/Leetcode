/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    if(s.length == 0)
        return true;
    let i = 0;
    let j = 0;
  
    while(i < s.length && j < t.length){
        if(s.charAt(i) == t.charAt(j)){
            i++;
        }j++;
        if(i == s.length)  return true;
    }
    return false;  
};