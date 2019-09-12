/**
 * 装饰模式：
 * 装饰模式不需要改变已有接口，作用是给对象加上新的功能
 * 装饰器是一个函数，用来修改类的行为
 */
//es7的装饰器模式
function readonly(target,key,discriptor){
    discriptor.writable = false;
    return discriptor;
}
@readonly
class Test{
    
   constructor(){
   
    this.name = 'xxx';
   }
}

let t = new Test();
t.yck = '111';