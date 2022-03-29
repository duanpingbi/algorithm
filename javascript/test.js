// // 说明：
// // 1. 在不查阅文档前提下，请 60 分钟内在该页面上完成所有习题

// 题目1. 基于 window.requestAnimationFrame 写一个动画函数，将一个 DOM 元素 ele 在 duration 内，从当前位置向右线平移 moveLength 像素

function moveRight(ele, moveLength, duration) {
  
}

// // 题目2. 写一个节流函数 (限制一个函数在一定时间内只执行一次)

function throttle(func, duration) {
  let flag = true;
  return (...args) => {
    if (!flag) {
      return;
    }
    setTimeOut(() => {
      func.apply(this, args);
      flag = false;
    }, duration);
  };
  
}


// 题目3. 有如下文本，请提取文本中的所有 URL 

const text = "这是一段文本https://www.showmebug.com/pads/LKGVGT这是一段文本http://www.showmebug.com这是一段文本http://showmebug.comm这是一段文本"
  
function extractURLFromText(text) {
  const reg = /(http:\/\/|https:\/\/)((\w|=|\?|\.|\/|&|-)+)/g;
  return text.match(reg);
}

console.log('extractURLFromText', extractURLFromText(text));

// 题目4. 给你一个数组 nums，对于其中每个元素 nums[i]，请你统计数组中比它小的所有数字的数目。

//   换而言之，对于每个 nums[i] 你必须计算出有效的 j 的数量，其中 j 满足 j != i 且 nums[j] < nums[i] 。

//   （不能用 sort 和 filter）

//   以数组形式返回答案。
//   示例 ：


//   输入：nums = [8,1,2,2,3]
//   输出：[4,0,1,1,3]
//   解释： 
//   对于 nums[0]=8 存在四个比它小的数字：（1，2，2 和 3）。 
//   对于 nums[1]=1 不存在比它小的数字。
//   对于 nums[2]=2 存在一个比它小的数字：（1）。 
//   对于 nums[3]=2 存在一个比它小的数字：（1）。 
//   对于 nums[4]=3 存在三个比它小的数字：（1，2 和 2）。

//   提示：

//   2 <= nums.length <= 500
//   0 <= nums[i] <= 100

// 暴力法，时间复杂度o(n^2);
function smallerNumbersThanCurrent(nums) {
  const len = nums.length;
  const res = new Array(len).fill(0);
  for(let i = 0; i < len; i++) {
    for(let j = 0; j < len; j++) {
      if(i !== j && nums[i] > nums[j]) {
        res[i]++;
      }
    }
  }
  return res;
};

console.log(smallerNumbersThanCurrent([10,1,2,2,3]))


// 题目5. 实现 atoi，将字符串转为整数。
// 说明：
// 假设我们的环境只能存储 32 位有符号整数，其数值范围是 [−2 的 31 次方, 2 的 31次方 − 1]。如果数值超过可表示的范围，则返回 INT_MAX (2 的 31 次方 − 1) 或 INT_MIN (−2 的31次方) 。
// 不能使用 parseInt

// Example 1:
// Input: ""

// Output: 0

// Example 2:

// Input: "+2"
// Output: 2

// Example 3:

// Input: "+"
// Output: 0

// Example 4:

// Input: "-223pasudasd"
// Output: -223
 
// Example 5:

// Input: "-91283472332"
// Output: -2147483648  

// /**
//  * @param {number[]} nums
//  * @return {number[]}
//  */
 
function atoi(text) {
  const INT_MAX = 2147483648;
  const INT_MIN = -2147483648;
  text = text.replace(/[^-\d]/g, '');
  let res = Number(text);
  
  if(res < INT_MIN) {
    return INT_MIN;
  }
  if(res > INT_MAX) {
    return INT_MAX;
  }
  return res;
};

console.log(atoi("-223pasudasd"))
