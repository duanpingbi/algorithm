/**
 * 适配器模式：
 * 适配器用来解决两个接口不兼容的情况，不需要改变已有的接口，通过包装一层的方式实现两个接口的正常协作
 * 
 * 
 * 在vue中我们也经常会用到适配器模式，比如父组件传递给子组件一个时间戳属性，组件内部需要将时间戳转为正常的日期显示，一般会使用 computed 来做转换这件事情，这个过程就使用到了适配器模式。
 */
class plug{
    getName(){
        return 'xxx';
    }
}

class Target{
    constructor(){
        this.plug = new plug();
    }
    getName(){
       return this.plug.getName()+'111';
    }
}
let t = new Target();
console.log(t.getName());