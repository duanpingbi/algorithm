function timeBitToRange(timeBit){
    let time = timeBit.split("").map(i=>+i);
    let range = {};
    let start = 0;
    let res = [];
    for(let i=0;i<=time.length;i++){
        if(time[i]){
            start++;
        }
        if(!time[i] && time[i-1]){
            range[i] = start;
            start = 0;
        }
    }
    for(let j in range){
        res.push(format(parseInt(j - range[j]),parseInt(j)));
    }
    return res;
}

function format(start,end){
    start = (start / 2).toFixed(1);
    end = (end / 2).toFixed(1);
    let reg = /(\d+)\.(\d+)/;
    let startRes = start.match(reg);
    let endRes = end.match(reg);
    return(
        addZero(startRes[1])+
        ":"+
        addZero(startRes[2])+
        "~"+
        addZero(endRes[1])+
        ":"+
        addZero(endRes[2])
    );
}
function addZero(num){
    num = num===5?'30':num;
    return num.length>1?num:'0'+num;
}