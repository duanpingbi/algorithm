function insertSort(arr) {
    for(var i=1,len=arr.length;i<len;i++){
        for(var j=i;j>0;j--){
            if(arr[j]<arr[j-1]){
                [arr[j],arr[j-1]] = [arr[j-1],arr[j]];
            }else{
                continue;
            }
        }
    }
    return arr;
}
var arr = [1,4,6,2,9,2,5,3,4,2];
console.log(insertSort(arr));