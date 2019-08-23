//实现call函数的步骤：1.判断当前this是否是函数，防止Function.prototype.mycall()直接调用
//2.处理context,为可选参数，默认为window
//3.为context创建一个Symbol属性，将当前函数赋值给这个属性
//4.处理参数，调用函数，删除Symbol属性

Function.prototype.macall = function(context = window,...arg){
    if(typeof this === 'function'){
        return undefined;
    }
    context = context || window;
    const fn = new Symbol();
    context[fn] = this;
    const result = context[fn](...arg);
    delete context[fn];
    return result;
}

