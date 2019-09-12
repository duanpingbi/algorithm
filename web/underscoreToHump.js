/**
 * 
 * 
const testData = {
    a_v: 123,
    a_y: [1, 2, 3, 4], 
    a_d: {
        s: 2,
        s_3: 3
    },
    a_f: [{
        a_g: 5
    }],
    a_a_d: 1
}
// a_d => aD
// a_a_d =>aAD
function underscoreToHump(data, isDeep=true) {
    //要实现的函数
}
 * 
 */
function underscoreToHump(data,isDeep = true){
    if(data === null || data === undefined){
        return;
    }
    var newObj = {};
   if(typeof data !== 'object'){
        return data;
   } else {
    if(Array.isArray(data)){
        for(let i=0;i<data.length;i++){
            data[i] = underscoreToHump(data[i],isDeep);
        }
        return data;
    } else {
        for(var key in data){
            let keystr = key.toString();
            if(keystr.indexOf("_")>-1){
                let tmp = keystr.split("_");
                let f = tmp[0];
                tmp = tmp.map(i=>i.toUpperCase());
                tmp[0] = f;
                let temp = tmp.join("");
                newObj[temp] = underscoreToHump(data[key],isDeep);
            } else {
                newObj[keystr] = underscoreToHump(data[key],isDeep);
            }
        }
        return newObj;
    }
   }
}

const testData = {
    a_v: 123,
    a_y: [1, 2, 3, 4], 
    a_d: {
        s: 2,
        s_3: 3
    },
    a_f: [{
        a_g: 5
    }],
    a_a_d: 1
}
console.log(underscoreToHump(testData))