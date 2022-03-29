/**
 * 给定一个无序的整数数组，找到其中最长上升子序列的长度。

示例:

输入: [10,9,2,5,3,7,101,18]
输出: 4 
解释: 最长的上升子序列是 [2,3,7,101]，它的长度是 4。
说明:

可能会有多种最长上升子序列的组合，你只需要输出对应的长度即可。
你算法的时间复杂度应该为 O(n2) 。
解法1:
动态规划：
最重要的解题思路是要找出“状态转移方程”
本题的状态转移方程为：
dp[i] = max{1 + dp[j] for j < i if nums[j] < nums[i]}
 */
var lengthOfLIS = function(nums){
    if(nums.length <2) {
        return nums.length;
    }
    let dp = new Array(nums.length).fill(1);
    let res = 1;
    for(let i =0 ;i < nums.length; i++) {
        for(let j = 0; j<i;j++){
            if(nums[j] < nums[i]) {
                dp[i] = Math.max(dp[i],dp[j]+1);
                res = Math.max(res,dp[i]);
            }
        }
    }
    return res;
}
/**
 * 
 * @param {*} nums
 * 解法2:贪心算法加上二分查找
 *  
 */
let arr = [10,9,2,5,3,7,101,18];
let result = lengthOfLIS(arr);
console.log(result);