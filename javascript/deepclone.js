/**
 * 深克隆
 */
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const testCase = {
  a: new Date(),
  b: undefined,
  c: /234/igm,
  d: {},
  h: true,
  i: 234,
  k: 'sdfsd',
  m: [1, 2, 3],
  obj: {a: 'ddd'},
  n: {f: 3, g: [3, new Date(), /ewrew/ig, 45, 8, {d: 33}]},
  o: /sdf/i,
  w: function () {
    console.log(44)
  },
  r: null,
  v: arr,
  s: arr,
};
/**
 * @param target 需要被克隆的对象
 * @returns 克隆出来的对象
 */

 const clone = target => {
   const isType = (target, type) => {
     const typeString = Object.prototype.toString.call(target);
     let flag = false;
    switch(type) {
      case 'Array': 
      flag = typeString === '[object Array]';
      break;
      case 'RegExp': 
      flag = typeString === '[object RegExp]';
      break;
      case 'Date': 
      flag = typeString === '[object Date]';
      break;
      default: 
      flag = false;
    }
    return flag;
   }
   const getTargetInfo = target => {
     let attr = '';
     if(target.global) {
      attr += 'g';
     } 
     if(target.ignoreCase) {
       attr += 'i';
     }
     if(target.multiline) {
       attr += 'm';
     }
     return attr;
   }
   let children = [];
   let parents = [];
     const _clone = target => {
         if(typeof target !== 'object') return target;
         if(target === null) return null;
         let child, prototype;
         if(isType(target,'Array')) {
           child = [];
         } else if(isType(target, 'RegExp')) {
          //  对正则的处理
          child = new RegExp(target.source, getTargetInfo(target));
          if(target.lastIndex) {
            child.lastIndex = target.lastIndex;
          }
         } else if(isType(target, 'Date')) {
           child = new Date(target.getTime());
         } else {
           prototype = Object.getPrototypeOf(target);
           child = Object.create(prototype);
         }
         let index = parents.indexOf(target);
        //  对循环应用的处理
         if(index !== -1) {
           return children[index];
         }
         children.push(child);
         parents.push(target);
         for(let i in target) {
          child[i] = _clone(target[i]);
        }
         return child;
     }
     return _clone(target);
 }

 const test = clone(testCase);
 test.o = /aaa/g;
 console.log('tt',test);
 console.log('test', testCase === test);