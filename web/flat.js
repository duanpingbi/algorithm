//Array数组的flat方法实现

/**
 * 利用递归的方法实现，首先遍历数组的每一项，如果是数组的话递归调用flat函数，
 * 如果不是，也就是递归的出口，直接将元素push进去就行了
 */
Array.prototype.flat = function(){
    var res = [];
    this.forEach(item =>{
        if(Array.isArray(item)){
            res = res.concat(item.flat());
        } else {
            res.push(item);
        }
    })
    return res;
}

/**
 * 方式二：
 * 实现步骤，利用toString()方法拍平连接数组，然后用split()方法转换为数组，再将数组中的每个元素转换为数字
 */
Array.prototype.flat1 = function(){
   return this.toString().split(',').map(item=>+item)
}
var arr = [1,2,3,[4,5],[6,7],[4,5,[8,9]]];
console.log(arr.flat());

console.log(arr.flat1());