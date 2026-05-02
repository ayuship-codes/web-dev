
//for loop
for(let i = 1; i <= 10; i++){
    console.log(i)
}

//for in loop
let obj={
    name : "Rohan",
    id : 1223
}
for (const key in obj) {  
    const value = obj[key];
    console.log(key, value)
    
}

//for of loop
let name = "Aaramya"
for (const ch of name) {
    console.log(ch)
}

//while loop
let a = 1
while(a<5){
    console.log(a)
    a++
}

//do while loop
let b=10
do{
    console.log(b)
    b++
}while(b<5)