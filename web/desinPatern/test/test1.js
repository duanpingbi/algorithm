function add(num1,num2){
    var n1 = parseInt(num1[0]),
        n2 = parseInt(num2[0]);
    var f1,f2;
    if(num1[1] === 'i'){
        f1 = 1;
    } else if(num1[1][0] === '-') {
        f1 = parseInt(num1[1][1])*(-1);
    } else {
        f1 = parseInt(num1[1][0]);
    }
    if(num2[1] === 'i'){
        f2 = 1;
    } else if(num2[1][0] === '-') {
        f2 = parseInt(num2[1][1])*(-1);
    } else {
        f2 = parseInt(num2[1][0]);
    }
    // console.log(f1);
    var rn = n1*n2+(-1)*f1*f2,
        rf = n1*f2+n2*f1;
    return ''+rn+"+"+rf+"i";
}
var num1 = '1+2i'.split('+');
var num2 = '2+i'.split('+');
console.log(add(num1,num2));