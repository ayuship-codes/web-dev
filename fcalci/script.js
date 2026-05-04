let r = Math.random()
let a = Number("Enter first number:")
let b = Number("Enter second number:")
let c = prompt("Enter operator(+,-,")

let obj={
    "+":"-",
    "*":"+",
    "-":"/",
    "/":"**",
    "**":"*"
}

if(r < 0.1){
    c = obj[c]
    alert('Result is ${eval(`${a} ${c} ${b}`)}')
}
else{
    
    alert('Result is ${eval(`${a} ${c} ${b}`)}')
}