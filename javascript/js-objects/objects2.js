let obj ={
    name:"Raj",
    age:20,
    email:"hey@gmail.com"
}
//for in loops
for(let key in obj){
    console.log(key, obj[key])
}

console.log(Object.keys(obj));

//arrays of elements of object  
console.log(Object.entries(obj));

//computing entities
let role = "admin";
let obj2 ={
    name:"Raj",
    age:20,
    email:"hey@gmail.com",
    [role]:"Raj",
}


