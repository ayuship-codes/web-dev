//let s = "Hello";
//let rev = s.split('').reverse().join('');
//console.log(rev)

let num = prompt("Enter the number");
for(let i = 1; i<=num ; i++){
    if(i%2===0){
        console.log(`${i} is even`);
    }
    else{
        console.log(`${i} is odd`);
    }
}