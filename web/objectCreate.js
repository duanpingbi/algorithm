/**
 * 模拟Object.craete
 * Object.create方法创建了一个新对象，使用现有对象来提供新创建的对象的__proto__
 */
function craete(propto){
    function F(){}
    F.prototype = propto;
    return new F();
}