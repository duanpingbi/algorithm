/**
 * leetcode 69:
 * 实现 int sqrt(int x) 函数。

计算并返回 x 的平方根，其中 x 是非负整数。

由于返回类型是整数，结果只保留整数的部分，小数部分将被舍去。
示例 1:

输入: 4
输出: 2
示例 2:

输入: 8
输出: 2
说明: 8 的平方根是 2.82842..., 
     由于返回类型是整数，小数部分将被舍去。
 */
//牛顿迭代法
var mysqrt = function(x) {
    let l = 0;
    let h = Math.floor(x / 2) + 1;
    while(l < h) {
        // >>> 无符号右移，注意这里取得是右中位数，如果取左中位数会导致进入死循环
        let m = (l + h + 1) >>>1;
        let sq = m * m;
        if(x < sq) {
            h = m - 1;
        } else {
            l = m;
        }
    }
    return l;
}
let x = 18;
let result = mysqrt(x);
console.log(result);