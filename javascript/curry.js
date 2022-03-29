function add(a,b,c) {
    return a+b + c;
}

let test1 = add(1, 2, 3);
let addCurry = curry(add);
let test2 = addCurry(1)(2)(3);

console.log('test1', test1);
console.log('test2', test2);

function curry(fn) {
    let judge = (...args) => {
        console.log('fn.length', fn.length);
        console.log('args', args);
        if(fn.length === args.length) {
            return fn(...args);
        } else {
            return (...arg) => judge(...args, ...arg);
        }
    }

    return judge;
}