let input = document.querySelector("#input");
let btn = document.querySelector("#btn");

btn.addEventListener("click", function(){
    input.click();
})
input.addEventListener("change",function(dets){
    const file = dets.target.files[0];
    if(file){
        btn.textContent = dets.target.files[0].name;
    }
})