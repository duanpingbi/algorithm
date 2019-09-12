/**
 * 单例模式：
 * 单例模式很常用，比如全局缓存、全局状态管理等等这些都只需要一个对象，就可以使用单例模式
 * 单例模式的核心就时保证全局只有一个对象可以访问。因为js是一门无类的语言，所以别的语言实现的单例方式并不能嵌入js
 * 我们只需要用一个变量确保实例只创建一次就行了
 */
class singleton{
    constructor(){

    }
}
singleton.getInstace = (function(){
    let instace;
    return function(){
        if(!instace){
            instace = new singleton();
        }
        return instace;
    }
})();
let s1 = singleton.getInstace();
let s2 = singleton.getInstace();
console.log(s1 === s2);