/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
  if (nums.length < 2) {
    return nums;
  }
  const mid = Math.floor(nums.length / 2);
  const leftArray = nums.slice(0, mid);
  const rightArray = nums.slice(mid);
  return merge(sortArray(leftArray), sortArray(rightArray));
};
function merge(leftArray, rightArray) {
  const sortedArr = [];
  while (leftArray.length && rightArray.length) {
    if (leftArray[0] <= rightArray[0]) {
      sortedArr.push(leftArray.shift());
    } else {
      sortedArr.push(rightArray.shift());
    }
  }
  return [...sortedArr, ...leftArray, ...rightArray];
}
console.log(sortArray([5, 2, 3, 1]));
