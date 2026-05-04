let r = Math.random()
let a = Number(prompt("Enter first number:"))
let b = Number(prompt("Enter second number:"))
let c = prompt("Enter operator(+,-,*,/,**):")

let obj={
    "+":"-",
    "*":"+",
    "-":"/",
    "/":"**",
    "**":"*"
}
if (!["+", "-", "*", "/", "**"].includes(c)) {
    alert("Invalid operator!");
}
else{
    if(r < 0.1){
        c = obj[c]
        alert(`Result is ${eval(`${a} ${c} ${b}`)}`)
    }
    else{
        
        alert(`Result is ${eval(`${a} ${c} ${b}`)}`)
    }
}