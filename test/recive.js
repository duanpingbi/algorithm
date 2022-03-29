/**
 * 实现一个响应式函数？能对一个对象内的所有key添加响应式特性？要求输出如下代码
 * @param {*} key 
 * @param {*} val 
 */

const logInfo = (key, val) => {
  console.log(`SET key=${key} val=${val}`);
};

const resetProperty = (obj, key, val) => {
  reactive(val);
  Object.defineProperty(obj, key, {
    get() {
      return val;
    },
    set(newVal) {
      if (newVal === val) {
        return;
      }
      logInfo(key, newVal);
      val = newVal;
    },
  });
};
const arrPrototype = Array.prototype;
const newArrPrototype = Object.create(arrPrototype);
['push', 'pop', 'shift', 'unshift', 'sort', 'splice', 'reverse'].forEach(methodName => {
  newArrPrototype[methodName] = function() {
    arrPrototype[methodName].call(this, ...arguments);
    // 追加的一些操作
    console.log(`methodName ${methodName}, ${arguments}`);
  }
})
const reactive = (obj) => {
  if (typeof obj === "object") {
    for (let key in obj) {
      resetProperty(obj, key, obj[key]);
    }
  }
  // 对数组的处理
  if(Array.isArray(obj)) {
    obj.__proto__ = newArrPrototype;
  }
};

const data = {
  a: 1,
  b: 2,
  c: {
    c1: {
      a11: 222,
    },
    c2: 4,
  },
};
reactive(data);
data.a = 5; // SET key=a val=5
data.b = 7; // SET key=b val=7
data.c.c2 = 4;
data.c.c1.a11 = 1111;


/**
 * 基于proxy的响应式，能够监听属性的删除操作？要求最终的输出如下代码所示
 */
function makeObservable(target) {

}

let user = {};
user = makeObservable(user);
user.observe((action, key, value) => {
  console.log(`${action} key=${key} value=${value}`);
})

user.name = 'aaa'; // SET key=name value=aaa
console.log(user.name); // GET key=name value=aaa aaa
delete user.name; // DELETE key=name value=


