/*
工厂模式：
作用隐藏创建实例的复杂度，只需要提供一个接口，简单清晰
*/
class Man{
    constructor(name){
        this.name = name;
    }
    showName(){
        console.log(this.name);
    }
}
class factory{
    static create(name){
        return new Man(name);
    }
}

factory.create('xxx').showName();
