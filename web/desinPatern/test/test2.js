function getDay(str){
    var year = parseInt(str[0]),
        month = parseInt(str[1]),
        day = parseInt(str[2]);
        console.log(year,month,day);
    var months =[31,28,31,30,31,30,31,31,30,31,30,31];
    if(isYear(year)){
        months[1] = 29;
    }
    var today = 0;
    for(var i=0;i<month-1;i++){
        today += months[i];
    }
    today += day;
    return today;
}
function isYear(year){
    if(year%4===0&&year%100!==0 || year%400 ===0 ){
        return true;
    }
    return false;
}
var str = '2004-03-01'.split('-');
console.log(getDay(str));