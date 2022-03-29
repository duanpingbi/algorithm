function numberCount(n){
    let str = '' + n.toString(2);
   let arr = str.split('0');
    let max = 0;
    for(let i=0;i<arr.length;i++){
        if(max<arr[i].length){
            max=arr[i].length;
        }
    }
    return max;
}
let result = numberCount(65528);
console.log(result);