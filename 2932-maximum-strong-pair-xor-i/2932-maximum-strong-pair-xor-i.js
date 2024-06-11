/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumStrongPairXor = function (nums) {
  let max_xor = 0;
  const len = nums.length;

  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      if (Math.abs(nums[i] - nums[j]) <= Math.min(nums[i], nums[j])) {
        max_xor = Math.max(max_xor, nums[i] ^ nums[j]);
      }
    }
  }
  return max_xor;
};