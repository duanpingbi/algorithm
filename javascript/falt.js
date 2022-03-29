function flatten(arr) {
    while (arr.some(item => Array.isArray(item))) {
        console.log('arr', arr);
        arr = [].concat(...arr);
    }
    return arr;
}
const test = [1, [2, [3]]];

console.log(flatten(test));