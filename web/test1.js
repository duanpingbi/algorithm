/**
 * N个人排成一队，从1到5轮流报数，报5的人是幸运者，出列。

报到队尾后，从队首接着报。依此循环。

问：排在队尾的人是第几名幸运者？

注： N为小于100000的正整数。

例：

1人排成一队，他就是第1名幸运者。

3人排成一队，队尾是第2名幸运者。

5人排成一队，队尾是第1名幸运者。

8人排成一队，队尾是第3名幸运者

即求：N人排成一队，队尾是第多少名幸运者？
 * 
 * @param {} n 
 */


function luckNumber(n){
    if(n === 1){
        return 1;
    }
    var arr = [];
    var count = 0;
    var temp = arr[n-1];
    for(var i=0;i<n;i++){
        arr.push(i);
    }
    var t = arr[4];
    while(t!==temp){
        for(var i=0;i<5;i++){
            arr.push(arr.shift());
        }
        arr.shift();
        t = 
        count++;
    }
    return count;
}
console.log(luckNumber(20))


/***
 * 人们排队取号，从1开始取，碰到带4的数就跳过。现在第n个人来，取的号是多少？

例如：

第3个人，取的号是3；

第4个人，取的号是5；

第10个人，取的号是11；

第50000个人，取的号是86626;
 */
const n = parseInt(read_line());
const arr = Array.from({length: n}, x=>0);
arr[0] = 1;
let count = 0;
let num = 0;
for (let i=arr.length-1; i>=0; i--) {
  count++;
  if (count === 5) {
    num++;
    if (i===0) {
      break;
    } else {
      arr.pop();
      count = 0;
    }
  }
  if (i===0) {
    i = arr.length;
  }
}

print(num)
