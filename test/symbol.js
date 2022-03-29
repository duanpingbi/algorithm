/**
 * 实现对象可遍历
 */

const obj = {
    count: 0,
    [Symbol.iterator]: () => {
        return {
            next: () => {
                obj.count++;
                if(obj.count <= 10) {
                    return {
                        value: obj.count,
                        done: false,
                    }
                } else {
                    return {
                        value: undefined,
                        done: true,
                    }
                }
            }
        }
    }
};

for(const item of obj) {
    console.log(item); // 1 2 3 4 5 6 7 8 9 10
}