/**
 * 1.写一个 mySetInterVal(fn, a, b),
 * 每次间隔 a,a+b,a+2b 的时间，
 * 然后写一个 myClear，停止上面的 mySetInterVal
 */

function mySetInterVal(fn, a, b) {
    this.time = 0;
    let timer;
    this.start = () => {
        timer = setInterval(() => {
            fn();
            this.time ++;
            console.log('a+ this.time * b', a+ this.time * b);
        }, a+ this.time * b)
    };
    this.clear = () => {
        this.time = 0;
        clearInterval(timer);
    };
}

const timer = new mySetInterVal(()=> console.log(1111), 1000, 1000);
timer.start();
setTimeout(() => {
    timer.clear(); 
}, 4000);


/**
 * 合并二维有序数组成一维有序数组，归并排序的思路
 */
function mergeArr(arr) {
    if(arr.length < 1) {
        return [];
    }
    let mergedArr = arr[0];
    const merge = function(arrA, arrB) {
        const res = [];
        while(arrA.length && arrB.length) {
            if(arrA[0] < arrB[0]) {
                res.push(arrA.shift());
            } else {
                res.push(arrB.shift());
            }
        }
        return res.concat(arrA).concat(arrB);
    };

    for(let i = 1;i<arr.length;i++) {
        mergedArr = merge(mergedArr, arr[i]);
    }

    return mergedArr;
}

const test =  mergeArr([[1,2,6,7], [3,4,8,9], [2,4,10,14]]);
console.log('test', test);

/**
 * 斐波那契数列
 * F(0) = 0;
F(1) = 1;
F(n) = F(n - 1) + F(n - 2);
 */

// 递归版本
function fib(n) {
    if(n < 0) {
        throw Error(`n不能小于0`);
    }
    if(n <= 1) {
        return n;
    }

    return fib(n-1) + fib(n-2);
}

/**
 * 数组实现
 */
function fib1 (n) {
    if(n < 0) {
        throw Error('n不能小于0');
    }

    if(n < 2) {
        return n;
    }
    let f0 = 0;
    let f1 = 1;
    for(let i = 1; i<n;i++) {
        [f0, f1] = [f1, f0+f1];
    }
    return f1;
}

console.log('fib', fib1(8), fib(8));

/**
 * 字符串出现的不重复最长长度
 * 利用滑动窗口思想，有重复的字符，更新左边边界值
 */
function lengthOflongest(str) {
    if(str.length <=0) {
        return 0;
    }
    let j = -1;
    let res = 0;
    let map = new Map();
    for(let i =0;i<str.length;i++) {
        if(map.has(str[i])) {
            j = Math.max(j, map.get(str[i]));
        }
        res = Math.max(res, i - j);
        map.set(str[i], i);
    }
    return res;
}

console.log('lengthOfLongestSubstring', lengthOflongest('abcdaefa'));

var intersect = function(nums1, nums2) {
    nums1 = nums1.sort((a, b) => a - b);
    nums2 = nums2.sort((a,b) => a - b);
    const res = [];
    let i = 0;
    let j = 0;
    console.log('nums1',nums1);
    while(i< nums1.length && j < nums2.length) {
        if(nums1[i] < nums2[j]) {
            i++;
        } else if(nums1[i] > nums2[j]) {
            j++;
        } else {
            res.push(nums1[i]);
            i++;
            j++;
        }
    }
    return res;
};

console.log('intersect', intersect([1,2,2,1],[2,2]))