/**
 *  var arr1 = [{id: 1},{id: 7},{id: 2, pId: 1},{id: 3},{id: 4, pId: 3},{id: 5, pId: 2},{id: 6, pId: 2},{id: 8,pId: 6}] 
var arr2 = [{id: 1,children: [{id: 2,children: [{id: 5},{id: 6,children: [{id: 8}]}]}]},{id: 7},{id: 3,children: [{id: 4}]}]  分别用递归和非递归的方法，把arr1转化为arr2;再用递归和非递归的方法，把arr2转化为arr1

 */
var arr1 = [{id: 1},{id: 7},{id: 2, pId: 1},{id: 3},{id: 4, pId: 3},{id: 5, pId: 2},{id: 6, pId: 2},{id: 8,pId: 6}];
//非递归
function findId(arr,id){
    let result = [];
    for(let i=0;i<arr.length;i++){
        if(arr[i].pId === id){
            result.push(i);
        }
    }
    return result;
}

function findChild(arr){   
    if(arr){
        for(let i=0;i<arr.length;i++){
            var temp = findId(arr1,arr[i].id);
            if(temp.length === 0){
                continue;
            } else {
                for(var j=0;j<temp.length;j++){
                    arr[i].children = arr[i].children?arr[i].children.push({id:arr1[temp[j]].id}):[];
                }
                return findChild(temp);
            }
            
        }
    } else {
        return;
    }
}

function transArr(arr){
    var res = [];
    for(let i=0;i<arr.length;i++){
        if(!arr[i].pId){
            res.push(arr[i]);
        }
    }
    findChild(res);
    return res;
}

console.log(transArr(arr1));

convertToTreeData(data, pid){
    const result = []
    let temp = []
    for (let i = 0; i < data.length; i++) {
      if (data[i].parentId === pid) {
        const obj = { 'label': data[i].name, 'id': data[i].id }
        temp = this.convertToTreeData(data, data[i].id)
        if (temp.length > 0) {
          obj.children = temp
        }
        result.push(obj)
      }
    }
    return result
  }
