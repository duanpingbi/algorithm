/**
 * 
给定一个包括 n 个整数的数组 nums 和 一个目标值 target。找出 nums 中的三个整数，使得它们的和与 target 最接近。返回这三个数的和。假定每组输入只存在唯一答案。

例如，给定数组 nums = [-1，2，1，-4], 和 target = 1.

与 target 最接近的三个数的和为 2. (-1 + 2 + 1 = 2).

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/3sum-closest
 */

/**
* @param {number[]} nums
* @param {number} target
* @return {number}
*/
function sortBy(a,b){
    return a-b;
}
var threeSumClosest = function (nums, target) {
    nums.sort(sortBy);
    console.log(nums);
    let threeSum = nums[0] + nums[1] + nums[2];
    for (let i = 0; i < nums.length - 2; i++) {
        let low = i+1;
        let high = nums.length - 1;
        while(low < high) {
            let sum = nums[i] + nums[low] + nums[high];
            if(Math.abs(sum - target) < Math.abs(threeSum - target)) {
                 threeSum = sum;
            }
            if(sum < target ){
                low++;
            } else if( sum > target) {
                high--;
            } else {
                return target;
            }
        }
    }
    return threeSum;
};

let nums = [1,2,4,8,16,32,64,128];
let result = threeSumClosest(nums,82);
console.log(result);