/**
 * 给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。
    你可以假设数组中无重复元素。
    示例 1:
    输入: [1,3,5,6], 5
    输出: 2
 */
var searchInsert = function(nums,target) {
    let l = 0;
    let h = nums.length - 1;
    while(l <= h ){
        let index = Math.floor((l + h) / 2);
        if(target > nums[index]) {
            l = index + 1;
        } else if(target < nums[index]) {
            h = index - 1;
        } else {
            return index;
        }
    }
    return l;
}

let arr = [1,3,5,6];
let target = 0;
let result = searchInsert(arr,target);
console.log(result);