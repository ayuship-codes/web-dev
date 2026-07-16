var bulb = document.querySelector(".bulb")
var btn = document.querySelector("button")
var flag = 0

btn.addEventListener("click",function(){
    if(flag==0){
        bulb.style.backgroundColor = "yellow"
        console.log("ON")
        btn.innerText = "OFF"
        flag = 1
    }else{
        bulb.style.backgroundColor = "white"
        console.log("OFF")
        btn.innerText = "ON"
        flag = 0
    }
})