function fun(n,o){
    console.log(o);
    return {
        fun:function(m){
            return fun(m,n);
        }
    }
}
var a = fun(0);
console.log(a);//undefined
console.log('----------------------');
console.log(a.fun(1));//0
console.log('----------------------');
console.log(a.fun(2));//0
console.log('----------------------');
console.log(a.fun(3));//0

var b = fun(0).fun(1).fun(2).fun(3);//0 1 2
console.log('----------------------');
console.log(b);

var c = fun(0).fun(1);//0
console.log('----------------------');
console.log(c);