//利用generator函数和for ... of 循环实现fibonacci数列
function *fibonacci(){
    let [pre,cur] = [0,1];
    while(true){
        [pre,cur] = [cur,pre+cur];
        yield cur;
    }
}

for(let i of fibonacci()){
    if(i>50) break;
    console.log(i);
}