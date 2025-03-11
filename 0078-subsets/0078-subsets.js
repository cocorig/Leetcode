/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
      const result = [];
      const subset = [];
      function createSubset(i) {
        if (i === nums.length) {
          result.push([...subset]);
          return;
        }
        subset.push(nums[i]);
        createSubset(i + 1);

        subset.pop();
        createSubset(i + 1);
      }

      createSubset(0);
      return result;
};