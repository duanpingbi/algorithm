let p1 = new Promise((resolve,reject) => {
    reject(111);
}).then(res => {
    console.log('res', res)
},
res => {
    return new Promise((resolve,reject) => {
        reject(res);
    })
}
).then(res => {
    console.log('res2', res);
}, res => {
    console.log('res3', res);
}
)