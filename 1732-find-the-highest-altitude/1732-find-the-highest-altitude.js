/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    let previous = 0;
    let biggest = 0;
    
    for (let i = 0; i < gain.length; i += 1) {
        previous += gain[i];
        if (previous > biggest) biggest = previous;
    }
    
    return biggest;
};