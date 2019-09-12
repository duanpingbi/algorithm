/**
 * 模拟new
 * new操作符到底做了哪些事情呢？
 * 1.创建一个全新的对象
 * 2.它会被执行__proto__的链接
 * 3.它使this指向新创建的对象
 * 4。 通过new创建的每个对象最终被[[ Prototype ]]链接到这个函数的prototype对象上
 * 5.如果函数没有返回对象类型Object(包含Function,Array,Data,RegExg,Error),
 * 那么new表达式中的函数调用将返回该对象引用
 */
function createObj(){
    const obj = new Object();
    const fn = Array.prototype.shift.call(arguments);
    fn.__proto__ = this.prototype;
    const ret = fn.apply(obj,arguments);
    return typeof ret === 'object'?ret:obj;
}

function create(name,age){
    this.name = name;
    this.age = age;
}

console.log(createObj(create,'xxx',19));
console.log(new create('xxx',20));