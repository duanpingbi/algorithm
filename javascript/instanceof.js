function instance_of(L,R) {
    let r_proto = R.prototype;
    let l_proto = L.__proto__;
    while(l_proto) {
        if(r_proto === l_proto) return true;
        l_proto = l_proto.__proto__;
    }
    return false;
}

function test() {
   console.log('2222'); 
}

console.log(instance_of(test, String));