function fib(n){
    var res1 =1;
    var res2 = 1;
    var sum = res2;
    if(n === 0){
        return n;
    }
    for(var i=2;i<=n;i++){
       	res1 = res2;
        res2 = sum;
        sum = res1+res2;
    }
    return sum;
}
console.log(fib(50));