function deepClone(obj, map = new WeakMap()) {
    if(obj === null) {
        return null;
    }

    if(obj instanceof Date) {
        return new Date(obj);
    }

    if(obj instanceof RegExp) {
        return new RegExp(obj);
    }

    if(map.has(obj)) {
        return map.get(obj);
    };

    if(typeof obj !== 'object') {
        return obj;
    }

    const res = Array.isArray(obj) ? [] : {};
    map.set(obj, res);

    for(const key in obj) {
        res[key] = deepClone(obj[key], map);
    }
    
    return res;
}

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

const newObj = deepClone(testCase);

console.log(newObj === testCase);

console.log('newObj', newObj);
