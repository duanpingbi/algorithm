//apply的实现类似于call,参数为数组
Function.prototype.myapply = function(context = window,arg){
    const fn = Symbol();
    context[fn] = this;
    let result;
    if(arg){
        result = context[fn](...arg);
    } else {
        result = context[fn]();
    }
    delete context[fn];
    return result;
}

var obj = {
    a:1
}
 function print(...arg){
     console.log(this.a);
     console.log(...arg);
 }

 print.myapply(obj,[1,2,3]);