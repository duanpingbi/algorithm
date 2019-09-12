//实现两个大数相加
const a = '123456789';
const b = '111111111111';

function add(a,b){
    var res = '',
    temp = 0;
    a = a.split("");
    b = b.split("");
    while(a.length || b.length || temp){
        temp += ~~(a.pop())+~~(b.pop());
        res = temp%10 + res;
        temp = temp>9;
    }
    return res.replace(/^0+/,"");
}
console.log(add(a,b));
