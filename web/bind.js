/**
 * 实现一个bind函数：
 * 一个bind函数主要做了以下的事情：
 * 1.返回一个函数，绑定this，传递预置参数
 * 2.bind返回的函数可以作为构造函数使用，所以作为构造函数的时候this失效，但是传入的参数依旧有效。
 */
Function.prototype.mybind = function(context){
    if(typeof this !== 'function'){
        throw Error(this+'is not a function');
    }
    let self = this;
    let arg = Array.prototype.slice.call(arguments,1);
    var fn = function(){
        self.apply(this instanceof this?this:context,arg.concat(Array.prototype.slice(arguments)));
    }
    fn.prototype = Object.create(self.prototype);
    return fn;
}

var obj = {
    a:1,
    b:2
}

function print(){
    console.log(this.a);
}
print.bind(obj)();