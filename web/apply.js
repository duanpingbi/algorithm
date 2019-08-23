//apply的实现类似于call,参数为数组
Function.prototype.myApply = function (context = window,arg){
    if(typeof this === 'function'){
        return undefined;
    }
    context = context || window;
    const fn = new Symbol();
    context[fn] = this;
    let result;
    if(Array.isArray(arg)){
        result = context[fn](...arg);
    } else{
        result = context[fn]();//处理不传参数的情况
    }
    delete context[fn];
    return result;
}