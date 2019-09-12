let url = 'https://www.youzan.com?kdt_id=190&order_no=xxxxxx&goods_id=1&goods_id=2';
function getUrl(url){
    let arr = url.split("?")[1];
    let params = arr.split("&");
    let res = {};
    for(let i =0;i<params.length;i++){
        let key = params[i].split('=')[0];
        let val = params[i].split('=')[1];
        if(res[key]){
            res[key] = [].concat(res[key],val);
        } else {
            res[key] = val;
        }
    }
    return res;
}

let result = getUrl(url);
console.log(result);