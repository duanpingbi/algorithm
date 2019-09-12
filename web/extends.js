/**
 * 利用es5实现类的继承，
 * 主要步骤：
 * 创建父类，以及父类方法
 * 创建子类，利用call方法调用父类构造函数，将子类的原型指向父类，将子类原型的构造函数指向子类，
 * @param {*} name 
 */

function Parent(name){
    this.name = name;
}
Parent.prototype.say = function(){
    console.log(this.name);
}

function Child(name,age){
    Parent.call(this,name);
    this.age = age;
}
 Child.prototype = Object.create(Parent.prototype);
 Child.prototype.constructor = Child;
 Child.prototype.say = function(){
     console.log(this.name,this.age);
 }

 var p = new Parent('aaa');
 p.say();

 var c = new Child('111',12);
 c.say();