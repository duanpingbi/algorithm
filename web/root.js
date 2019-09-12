function rootMaxTime(arr,n){
    var flag = new Array(n);
    flag.fill(0);
    for(var i=arr.length-1;i>=0;i--){
        for(var j=i-1;j>=0;j--){
            if(arr[i]<arr[j]){
                flag[j]++;
                break;
            }
        }
    }
    console.log(flag);
    var max = flag[0];
    var index = 0;
    for(var i=1;i<n;i++){
        if(flag[i]>max){
            max = flag[i];
            index = i;
        }
    }
    return arr[index];
}
var arr = [3,2,2,2,2];
var n = 5;      
console.log(rootMaxTime(arr,n));