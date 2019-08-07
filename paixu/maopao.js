function bubleSort(arr) {
    for(var len=arr.length,i=len;i>=2;i--){
        for(var j=0;j<i;j++){
            if(arr[j]>arr[j+1]){
                [arr[j],arr[j+1]]=[arr[j+1],arr[j]];
            }
        }
    }
    return arr;
}
var arr = [1,4,6,2,9,2,5,3,4,2];
console.log(bubleSort(arr));

/*
* 算法思路：
* 外循环遍历数组的每一项，内循环则用于比较元素。时间复杂度：O(n^2),
* 最好情况就是升序排列，不需要交换，比较次数为n，最坏情况是逆序，需要比较n^2次，移动n^2次，
* 属于稳定排序
* */