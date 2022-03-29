/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    if (s === '') return 0;
    if (s.length === 1) return 1;
    let temp = s[0];
    let count = 0;
    let max = 0;
    for (let i = 1; i < s.length; i++) {
        if (temp.includes(s[i])) {
            temp = temp.substring(temp.indexOf(s[i]) + 1);
            temp += s[i];
        } else {
            temp += s[i];
        }
        count = temp.length;
        max = Math.max(max, count);
    }
    return max;
};

// let res = lengthOfLongestSubstring("pwwkew");
// console.log('res', res);


/**
 * @param {string} s
 * @return {number}
 * 使用滑动窗口的方式 ，时间复杂度为O(n)
 */
var lengthOfLongestSubstring1 = function (s) {
    let max = 0;
    let start = -1;
    let temp = new Set();
    for (let i = 0; i < s.length; i++) {
        if (i !== 0) {
            temp.delete(s.charAt(i - 1));
        }
        while (start + 1 < s.length && !temp.has(s.charAt(start + 1))) {
            temp.add(s.charAt(start + 1));
            start++;
        }
        max = Math.max(max,start -i +1);
    }
    return max;
};
let res = lengthOfLongestSubstring1("pwwkew");
console.log('res', res);