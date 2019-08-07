function selectSort(arr) {
    for(var i =0,len=arr.length;i<len;i++){
        for(var j=i;j<len;j++){
            if(arr[j]<arr[i]){
                [arr[j],arr[i]] = [arr[i],arr[j]];
            }
        }
    }
    return arr;
}
var arr = [1,4,6,2,9,2,5,3,4,2];
console.log(selectSort(arr));