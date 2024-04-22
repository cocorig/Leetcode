var RecentCounter = function() {
    this.arr = [];
    this.start = 0;
};

/** 
 * @param {number} t
 * @return {number}
 */

RecentCounter.prototype.ping = function(t) {
    this.arr.push(t);
    while(this.arr[this.start] < t - 3000) {
        this.start++;
    }
    return this.arr.length - this.start;
};