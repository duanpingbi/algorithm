function swap(arr,i,j) {
    [arr[i],arr[j]] = [arr[j],arr[i]];
}
function shiftDown(arr,i,length) {
    let temp = arr[i];//父节点
    for(let j = 2*i+1;j<length;j = j*2+1){
        temp = arr[i];
        if(j+1<length&&arr[j+1]>arr[j]){//找到最大的孩子节点
            j++;
        }
        if(temp<arr[j]){
            swap(arr,i,j);
            i = j;
        }else{
            break;
        }
    }
}
function heapSort(arr) {
    //1.初始化最大堆
    let len = arr.length;
    for(let i = Math.floor(len/2-1);i>=0;i--){
        shiftDown(arr,i,len);
    }
    //2.将根节点与最后一个节点进行交换，然后调整最大堆
    for(let i = len-1;i>0;i--){
        swap(arr,0,i);
        shiftDown(arr,0,i);
    }
}
let Arr = [4, 6, 8, 5, 9, 1, 2, 5, 3, 2];
heapSort(Arr);
console.log(Arr);
/*
* 堆排序的主要思想，构建最大堆，然后交换根节点和最后一个元素，调整堆
* 将 i 结点以下的堆整理为大顶堆，
* 注意这一步实现的基础实际上是：假设 结点 i 以下的子堆已经是一个大顶堆，
* shiftDown函数实现的功能是实际上是：找到 结点 i 在包括结点 i 的堆中的正确位置。
* 后面做第一次堆化时，heapSort 中写了一个 for 循环，从第一个非叶子结点开始，
* 对每一个非叶子结点都执行 shiftDown操作，
* 所以就满足了每一次 shiftDown中，结点 i 以下的子堆已经是一大顶堆
*
*
*
*
*
* 复杂度分析：adjustHeap 函数中相当于堆的每一层只遍历一个结点，因为
具有n个结点的完全二叉树的深度为[log2n]+1，所以 shiftDown的复杂度为 O(logn)，
* 而外层循环共有 f(n) 次，所以最终的复杂度为 O(nlogn)。
* */