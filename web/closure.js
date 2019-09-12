/**
 * 实现一个函数具有以下功能：
 * fn()//1
 * fn()//2
 * fn()//3
 * fn.clear()//1
 */

 //解法1

 var count = 1;
 function fn(){
     return (function(){
        return count++;
     })();
 }
 fn.clear = function(){
    return count = 1;
 }
 console.log(fn());
 console.log(fn());
 console.log(fn());
 console.log(fn.clear());

 function fn1(){
     this.count = 1;
     this.clear = function(){
         this.count = 1;
     }
 }

 var fn2 = new fn1();
 Object.defineProperties(fn2,fn2.count,{
    get : function(){
        return this.count++;
      },
      set : function(newValue){
        bValue = newValue;
      },
      enumerable : true,
      configurable : true
 })

 console.log(fn2)
 console.log(fn2.count);
 console.log(fn2.count);
 console.log(fn2.count);
 console.log(fn2.clear());