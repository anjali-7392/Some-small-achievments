Num1 = document.querySelector(".Num1");
Num2 = document.querySelector(".Num2");
res = document.querySelector(".res");

btnadd = document.querySelector(".btnadd");
btnsub = document.querySelector(".btnsub");
btndiv = document.querySelector(".btndiv");
btnmul = document.querySelector(".btnmul");

btnadd.onclick=()=>{
    res.innerHTML = parseInt(Num1.value) + parseInt(Num2.value);
}


btnsub.onclick=()=>{
    res.innerHTML = parseInt(Num1.value) - parseInt(Num2.value);
}


btndiv.onclick=()=>{
    res.innerHTML = parseInt(Num1.value) / parseInt(Num2.value);
}


btnmul.onclick=()=>{
    res.innerHTML = parseInt(Num1.value) *parseInt(Num2.value);
}