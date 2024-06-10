let btn=document.createElement("button");
btn.innerHTML="Click me";
btn.style.backgroundColor="red";
btn.style.color="white"
let bdy=document.querySelector("body");
bdy.prepend(btn);
let para=document.querySelector("p");
para.classList.add("newClass");