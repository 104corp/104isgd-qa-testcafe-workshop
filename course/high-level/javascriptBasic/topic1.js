function a(integer) {
    let arr = [];
    for(let index = 2; index < integer; index++) {
        if(integer%index == 0) {
            arr.push(index);
        }
    }
    if(arr.length == 0) {
        return integer + ' is prime';
    }
    
    return arr;
};
console.log(a(12)); // should return [2,3,4,6]
console.log(a(25)); // should return [5]
console.log(a(13)); // should return "13 is prime"
