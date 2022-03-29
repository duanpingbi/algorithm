/**
 * @param {number[]} heights
 * @return {number}
 * 时间复杂度 nLogn+n ~~~O(nLogn)
 */
var heightChecker1 = function (heights) {
    let target = heights.slice(0).sort((a, b) => a - b);
    let count = 0;
    for (let i = 0; i < heights.length; i++) {
        if (heights[i] !== target[i]) {
            count++;
        }
    }
    return count;
};

// let res = heightChecker1([1,2,3,4,5]);
// console.log('res', res);

/**
 * @param {number[]} heights
 * @return {number}
 * 时间复杂度 O(n) 桶排序思想
 */
var heightChecker2 = function (heights) {
    let temp = new Array(101).fill(0);
    let count = 0;
    for (let i = 0; i < heights.length; i++) {
        temp[heights[i]]++;
    }

    for (let i = 1, j = 0; i < 101; i++) {
        while (temp[i]-- > 0) {
            if (i !== heights[j++]) {
                count++;
            }
        }
    }
    return count;
};
let res = heightChecker2([23,52,46,7,50,87,20,32,85,65,62,34,8,86,15,66,66,30,11,96,18,26,24,10,57,13,37,69,85,6,8,17,40,88,14,72,85,51,40,38,54,65,65,27,18,59,77,12,25,46,10,19,10,28,64,79,5,88,2,1,14,50,91,34,58,32,90,67,28,81,84,76,88,45,42,54,59,56,20,6,56,51,72,69,6,48,67,68,6,10,93,69,4,29,28]);
console.log('res', res);
