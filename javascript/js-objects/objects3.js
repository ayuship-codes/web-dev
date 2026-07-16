
let role = "admin";
const obj ={
    name:"Raj",
    age:20,
    email:"hey@gmail.com",
    [role]:"Raj",
}
let {admin : work} =obj;  //here key doesnt change but variable changed to work

console.log(work);

//permanently changing the key
obj.work = obj.admin;
delete obj.admin;
console.log(obj);