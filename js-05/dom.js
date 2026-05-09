var bulb = document.querySelector(".bulb")
var btn = document.querySelector("button")
var flag = 0

btn.addEventListener("click",function(){
    if(flag==0){
        bulb.computedStyleMap.backgroundColor = "yellow"
        console.log("ON")
        flag = 1
    }else{
        bulb.computedStyleMap.backgroundColor = "black"
        console.log("OFF")
        flag = 0
    }
})