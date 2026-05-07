let r = Math.random()
let first, second, third
if(r<0.33){
    first = "Crazy"
}
else if(r>0.33 && r<0.66){
    first = "Amazing"
}
else{
    first = "Big"
}

r = Math.random()
if(r<0.33){
    second = "Engines"
}
else if(r>0.33 && r<0.66){
    second = "Garments"
}
else{
    second = "Groceries"
}

r = Math.random()
if(r<0.33){
    third = "Bros"
}
else if(r>0.33 && r<0.66){
    third = "Shop"
}
else{
    third = "Store"
}

console.log(`${first} ${second} ${third} `)