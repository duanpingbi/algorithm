Array.prototype.myMap = function(fn,contex = global){
    let arr = this;
    let res = [];
    for(let i=0;i<arr.length;i++){
        let item = fn.call(contex,arr[i],i,arr);
        res.push(item);
    }
    return res;
}
var arr = [1,2,3,4];
let a = arr.myMap((item)=>item*2);
console.log(a);