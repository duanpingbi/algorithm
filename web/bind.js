//实现步骤：
//1.处理参数，返回闭包
//2.判断是否为构造函数调用，如果是则使用new调用当前函数
//3.如果不是，使用apply，将context和处理好的参数传入
Function.prototype.myBind = function(context,...arg){
    if(this === Function.prototype){
        throw new TypeError('Error');
    }
    const _this = this;
    return function F(...arg1){
        if(this instanceof F){
            return new _this(...arg,...arg1);
        } 
        return _this.apply(context,arg.concat(arg1));
    }
}