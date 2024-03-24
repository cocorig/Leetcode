/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
    let arr1=new Set(nums1)
    nums2.forEach(v=>{arr1.delete(v)});
    let arr2=new Set(nums2);
    nums1.forEach(v=>{arr2.delete(v)});    
    return [[...arr1],[...arr2]];
};