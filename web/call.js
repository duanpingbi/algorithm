/**
 * 实现一个call
 * 一个call函数主要做了以下的事情，
 * 1.将函数直接作为传入对象的属性，如果对象没有传入默认值为window
 * 2.执行函数，保存结果
 * 3.删除这个属性，返回执行结果
 * 
 * 注意：在node的环境中没有window对象。
 * 
 */
Function.prototype.mycall = function(context = window,...arg){
    context = context || window || global;
    const fn = Symbol();
    context[fn] = this;
    let result = context[fn](...arg);
    delete context[fn];
    return result;
}

var obj = {
    a:3
}
var a = 3;
global.a = 4;
function print(){
    console.log(this.a);
}

print();
print.mycall(obj);
