/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function (nums) {
    let count = 1;
    let max = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i + 1] > nums[i]) {
            count++;
        } else {
            max = count > max ? count : max;
            count = 1;
        }
    }
    return max;
};
let res = findLengthOfLCIS([1, 3, 5, 4, 2, 3, 4, 5]);
console.log('res', res);

/**
 * @param {number[]} nums
 * @return {number}
 * 利用动态规划的方法解题
 */

var findLengthOfLCIS1 = function (nums) {
    if(nums.length === 0) return 0;
    let temp = new Array(nums.length).fill(1);
    let count = 1;
    for (let i = 1; i <= nums.length; i++) {
        if (nums[i] > nums[i - 1]) {
            temp[i] = temp[i-1] + 1;
            count = Math.max(temp[i],count);
        } 
    }
    return count;
}

let res1 = findLengthOfLCIS1([1, 3, 5, 4, 2, 3, 4, 5]);
console.log('res1', res1);