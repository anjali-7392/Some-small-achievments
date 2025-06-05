text = document.querySelector(".text");
paratext = document.querySelector(".paratext");

btn1 = document.querySelector(".btn1");
btn2 = document.querySelector(".btn2");
btn3 = document.querySelector(".btn3");
btn4 = document.querySelector(".btn4");
btn5 = document.querySelector(".btn5");
btn6 = document.querySelector(".btn6");

btn1.onclick = ()=>{
    paratext.style.color = "violet";
}

btn2.onclick = ()=>{
    paratext.style.fontSize = "50px";
}

btn3.onclick = ()=>{
    paratext.style.fontSize = "10px";
}

btn4.onclick = ()=>{
    paratext.style.backgroundColor = "pink";
}

btn5.onclick = ()=>{
    paratext.style.fontStyle = "italic";
}

btn6.onclick = ()=>{
    paratext.style.fontWeight = "bold";
}