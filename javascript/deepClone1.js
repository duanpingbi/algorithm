const deepClone = parent => {
    if(typeof parent !== 'object') {
        return parent;
    }
    if(parent === null) {
        return null;
    }
    let res;
    const isType = function(obj) {
        const typeString = Object.prototype.toString.call(obj);
        return typeString;
    }
    const getArrs = function (obj) {
        let atrrs = '';
        if(obj.ignore){
            atrrs += 'i';
        }
        if(obj.multiline) {
            atrrs += 'm';
        }
        if(obj.global) {
            atrrs += 'g';
        }
        return atrrs;
    }

    if(Array.isArray(parent)) {
        res = [];
    } else if(isType(parent) === 'date') {
        res = new Date(parent.getTime());
    } else if(isType(parent) === 'regexp') {
        res = new RegExp(parent.source, getArrs(parent));
        if(parent.lastIndex) {
            res.lastIndex = parent.lastIndex;
        }
    } else {
        res = {};
    }
    for(let key in parent) {
        res[key] = deepClone(parent[key]);
    }
    return res;
}

const test = {
    a: 1,
    b: 2,
    obj: {
        aaa: 111,
        c: 222,
    },
    arr: [
        {
            a: 1,
            b: 2,
        },
        {
            a: 4,
            b: 5,
        },
    ]
};

const result = deepClone(test);
console.log('result', result);



