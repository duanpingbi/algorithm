function shellSort(arr) {
    var len = arr.length,
        gap = 1,
        temp;
    while(gap<len/3){
        gap = gap*3+1;
    }
    for(gap;gap>0;gap=Math.floor(gap/3)){
        for(var i =gap;i<len;i++){
            temp = arr[i];
            for(var j = i-gap;j>=0 &&arr[j]>temp;j -= gap){
                arr[j+gap] = arr[j];
            }
            arr[j+gap] = temp;
        }
    }
    return arr;
}

function shellSort1(arr) {
    var len = arr.length,
        gap = 1;
    while(gap<len/3){
        gap = gap*3+1;
    }
    while(gap>=1){
        for(var i = gap;i<len;i++){
            for(var j = i;j>=gap&&arr[j]<arr[j-gap];j -= gap){
                [arr[j],arr[j-gap]] = [arr[j-gap],arr[j]];
            }
        }
        gap=(gap-1)/3;
    }
    return arr;
}
var arr = [1,4,6,2,9,2,5,3,4,2];
console.log(shellSort1(arr));