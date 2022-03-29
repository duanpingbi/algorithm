function currying(fn, ...args) {
    const originFnLength = fn.length;
    let allArgs = [...args];
    const resFn = (...fnArgs) => {
        allArgs = [...allArgs, ...fnArgs];
        if(originFnLength === allArgs.length) {
           return fn(...allArgs);
        } else {
            return resFn;
        }
    }

    return resFn;
}

const add = (a, b, c) => a+b+c;

const a1 = currying(add, 1);
const a2 = a1(2);
const a3 = a2(3);

console.log('a3', a3);