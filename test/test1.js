/**
 * 数据类型判断
 * 
 */

function typeOf(type) {
    return Object.prototype.toString.call(type).slice(8, -1);
}

// console.log(typeOf([]));
// console.log(typeOf({}));

/**
 * 写出一种继承
 * 
 */


