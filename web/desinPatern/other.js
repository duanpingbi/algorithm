/**
 * 1.代理模式：
 * 代理是为了控制对对象的访问，不让外部直接访问到对象，事件代理就用到了代理模式
 */


/**
 * 发布-订阅模式，也叫观察者模式，通过一对一，一对多的依赖关系，当对象发生改变时，订阅方都会收到通知
 */

 /**
  * 外观模式：
  * 外观模式提供了一个接口，隐藏内部逻辑，更加方便外部调用，比如做浏览器兼容时会封装一个函数
  */
 function addEvent(elm,evType,fn,useCapture){
    if(elm.addEventListener){
        elm.addEventListener(evType,fn,useCapture);
        return true;
    } else if(elm.attachEvent){
        var r = elm.attachEvent("on"+evType,fn);
    } else {
        elm["on"+evType] = fn;
    }
 }