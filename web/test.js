/**
 * 从不可知类型对象组建key数组组成的对象
 * [12, { orderNo: 'E20190907', kdtId: 666, realPay: 99, itemInfo: [ { kdtId: 189 } ]  }]
 * 提取对象
 * ['orderNo', 'kdtId']
 * @param source
 * @param keyGroups
 * @param level
 * result: { orderNo: 'E20190907', kdtId: 666 }
 */

/*function getObj(source, keyGroups, level) {
    let res = {};
    //let count = 0;
    let set = new Set(...keyGroups);
    if (source === null || source === undefined) {
        return;
    }
    if (typeof source !== 'object') {
        return source;
    }
    if (typeof source === 'object') {
        if (Array.isArray(source)) {
            for (let i = 0; i < source.length; i++) {
                if (typeof source[i] === 'object') {
                    for (let key in source[i]) {
                        if (set.has(source[i][key])) {
                            if (typeof source[i][key] !== 'object') {
                                res[key] = source[i][key];
                                //count++;
                            } else {
                                 res[key] = getObj(source[i][key], keyGroups, level++);
                                // if (level === count) {
                                //     res[key] = source[i][key];
                                // } else {
                                   
                                // }
                            }
                        }
                    }
                }
            }
        } else {
            for (let key in source) {
                if (set.has(key)) {
                    if (typeof source[key] !== 'object') {
                        res[key] = source[key];
                        count++;
                    } else {
                         res[key] = getObj(source[key], level++);
                        // if (level === count) {
                           
                        // }
                    }
                }
            }
        }
    }
    return res;
}
let obj = [12, { orderNo: 'E20190907', kdtId: 666, realPay: 99, itemInfo: [{ kdtId: 189 }] }];
let keyGroups = ['orderNo', 'kdtId'];
let res = getObj(obj, keyGroups, 1);
console.log(res);

*/

function getTargetArr(variable,keys) {
    let findArr = []
    
    function findTargetObj(obj,keys) {
        let Objkeys = Object.keys(obj)
        let isTarget = keys.every(item=>Objkeys.includes(item))
        if(isTarget){
            return keys.reduce((acc,item)=>{acc = Object.assign(acc,{[item]:obj[item]});return acc},{})
        }else {
            return false
        }
    }
    
    function getType(variable) {
        return Object.prototype.toString.call(variable).slice(8,-1)
    }
    
    function trans(variable,keys) {
        if(getType(variable) === 'Object') {
            let find = findTargetObj(variable,keys)
            if(find) {
                findArr = find
                return
            }
            for(var key in variable) {
                trans(variable[key],keys)
            }
        }else if(getType(variable) === 'Array') {
            for(var item of variable) {
                trans(item,keys)
            }
        }
    }
    
    trans(variable,keys)
    return findArr
}






function getTargetObj(variable,keys) {
    let findObj = {}
    
    function findTargetObj(obj,keys) {
        let Objkeys = Object.keys(obj)
        let isTarget = keys.every(item=>Objkeys.includes(item))
        if(isTarget){
            //return keys.reduce((acc,item)=>{acc = Object.assign(acc,{[item]:obj[item]});return acc},{})
            return keys.reduce((acc,item)=> acc = Object.assign(acc,{[item]:obj[item]}),{})
        }else {
            return false
        }
    }
    
    function getType(variable) {
        return Object.prototype.toString.call(variable).slice(8,-1)
    }
    
    function buildObj(variable,keys) {
        if(getType(variable) === 'Object') {
            let findTarget = findTargetObj(variable,keys)
            if(findTarget) {
                findObj = findTarget
                return
            }
            for(let key in variable) {
                buildObj(variable[key],keys)
            }
        }else if(getType(variable) === 'Array') {
            for(let item of variable) {
                buildObj(item,keys)
            }
        }
    }
    
    buildObj(variable,keys)
    return findObj
}
let variable = [12, { orderNo: 'E20190907', kdtId: 666, realPay: 99, itemInfo: [ { kdtId: 189 } ] }];
let keys = ['orderNo', 'kdtId']

let result = getTargetObj(variable,keys)
console.log(result);





