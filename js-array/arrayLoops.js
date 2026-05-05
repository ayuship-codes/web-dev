let a = [1,5,8,45,32]
a.forEach((value,index,a)=>{
    //console.log(value,index,a)
    console.log(value,index)
})

//for in -used for objects
let object ={
    a:1,
    b:2,
    c:3
}
for (const key in object) {
    if (!Object.hasOwn(object, key)) continue;
    
    const element = object[key];
    console.log(key,element)
    
}

//for of -used for array also

for (const element of a) {
    console.log(element)
}

//map
let newarr = a.map(e=>{
    return e**2
})
console.log(newarr.toString())

//filter
const greater = (e)=>{
    if(e>7){
        return true
    }
    return false
}
console.log(a.filter(greater))
console.log(a)

//reduce
const red = (x,y)=>{
    return x+y    
}
console.log(a.reduce(red))

//form - used to convert like object to array
console.log(Array.from("Hello"))