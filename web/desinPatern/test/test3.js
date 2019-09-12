function reverseLink(arr,n){
    var times = Math.floor((arr.length-1)/n);
    var res = [];
    for(var i=0;i<times;i++){
        for(var j=0;j<n;j++){
            res.unshift(arr.shift());
        }
    }
    var temp =(arr.length-1)%n;
    if( temp !==0){
        while(temp){
            res.psuh(arr[temp--]);
        }
    }
    var result = '';
    for(var i=0;i<res.length;i++){
        result += res[i]+'->';
    }
    return result;
}
var arr = [1,2,3,4,5,6,'#'];
var n = 3;
console.log(reverseLink(arr,n))