//实现promise.all
Promise.all = arr=>{
    let res = [];
    return new Promise((resolve,reject)=>{
        let i = 0;
        next();
        function next(){
            arr[i].then(data=>{
                res.push(data);
                i++;
                if(i=== arr.length){
                    resolve(res);
                } else {
                    next();
                }
            })
        }
    })
}