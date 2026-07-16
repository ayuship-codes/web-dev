let arr = [1,2,3,4,5];
let newarr = arr;
newarr[2]=88;
console.log(arr);
console.log(newarr);

let a = [1,3,4];
let b = [2,5,3,5];
let c = [...a,...b];
console.log(c);

let c = ["red","blue"]
c = ["green",...c]
console.log(c);