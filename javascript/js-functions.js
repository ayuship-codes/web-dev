// fat arrow function
let addition = (a,b)=>{
    return a+b;
}

console.log(addition(3,6));

function addScores(...scores){
    let total = 0;
    scores.forEach(function (val){
        total += val;        
    });
    return total;
}
console.log(addScores(3,5,1,9,0));


let a = [1,2,3].map(function (x){
    return x*2;
})
console.log(a);

//closures
function counter(){
    let count = 0;
    return function(){
        count++;
        console.log(count);
    }
}
let c = counter();
c();
c();