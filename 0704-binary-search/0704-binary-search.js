/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let leftIndex = 0;
  let rightIndex = nums.length - 1;

  while (leftIndex <= rightIndex) {
    let midIndex = Math.floor((leftIndex + rightIndex) / 2);
    if (target === nums[midIndex]) {
      return midIndex;
    }
    if (target < nums[midIndex]) {
      rightIndex = midIndex - 1;
    } else {
      leftIndex = midIndex + 1;
    }
  }

  return -1;
};

