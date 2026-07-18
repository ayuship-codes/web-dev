let h1 = document.createElement("h1");
h1.textContent="Hello";
document.querySelector("body").append(h1);

//selecting id
let a = document.querySelector("#apple");

let l = document.querySelectorAll("li");
l.forEach( function(val){
    console.log(val.textContent);
})
for(let i = 0;i<l.length;i++){
    console.log(l[i].textContent);
}

//setting title 
let h = document.querySelector("h1");
h.setAttribute("title", "This is the Title");

//adding new list item at end
let newli = document.createElement("li");
newli.textContent = "Hello World 5";
document.querySelector("ul").appendChild(newli);

//adding image using prepend
let img = document.createElement("img");
img.setAttribute("src", "https://static-cse.canva.com/blob/996499/Sanstitre.jpg");
document.querySelector("div").prepend(img);
img.classList.add("image");

//higlighting alternate list items
let li = document.querySelectorAll("ul li:nth-child(2n)");
li.forEach(function(elem){
    elem.classList.add("highlight");

})

//event listeners
let x = document.querySelector("h1");
x.addEventListener("click", function (){
    x.style.color = "red";
})

//double click
let p = document.querySelector("p");

function dblclick(){
    p.style.color = "green";
}

p.addEventListener("dblclick", dblclick)
p.removeEventListener("dblclick", dblclick)

//input event listener
let inp = document.querySelector("input");
inp.addEventListener("input", function(val){
    if(val.data !==null){
        console.log(val.data);
    }
})

let sel = document.querySelector("select");
let lbl = document.querySelector("#choice");
sel.addEventListener("change", function(dets){
    console.log(dets.target.value);
    choice.textContent = `${dets.target.value} continent Selected`;
})
