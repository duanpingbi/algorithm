/*
* 利用递归实现快速排序
* */
function qSort(arr) {
    if(arr.length === 0){
        return [];
    }
    var left =[];
    var right = [];
    var p = arr[0];
    for(var i=1,len=arr.length;i<len;i++){
        if(arr[i]<p){
            left.push(arr[i]);
        }else{
            right.push(arr[i]);
        }
    }
    return qSort(left).concat(p,qSort(right));
}


//优化版
function QSort(arr,low,high) {
    
}
var arr = [1,4,6,2,9,2,5,3,4,2];
console.log(qSort(arr));