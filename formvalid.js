formsubmit = document.querySelector(".formsubmit")
username = document.querySelector(".username")
userpass = document.querySelector(".userpass")

msg = document.querySelector(".msg")
closebtn = document.querySelector(".closebtn")
msgbox = document.querySelector(".msgbox")

formsubmit.onsubmit =()=>{
    if(username.value !="" && userpass.value!=""){
        msgbox.style.display = "flex";
        msgbox.style.background = "lightgreen";
        msg.innerHTML = "Successfully";
        msg.style.color = "green";
    }else{
        msgbox.style.display = "flex";
        msgbox.style.background = "lightcoral";
        msg.innerHTML = "Please Fill!";
        msg.style.color = "red";
    }
    return false;
}

closebtn.onclick = ()=>{
    msgbox.style.display = "none";
}

userpass.oninput = ()=>{
    upcase = document.querySelector(".upcase")
    locase = document.querySelector(".locase")
    numvalue = document.querySelector(".numvalue")
    spechar = document.querySelector(".spechar")
    minlen = document.querySelector(".minlen")

    uper = /[A-Z]/g;
    lower = /[a-z]/g;
    num = /[0-9]/g;
    spe = /[#$&_@]/g;
    len = 12;

    upcase.style.display = "block";
    locase.style.display = "block";
    numvalue.style.display = "block";
    spechar.style.display = "block";
    minlen.style.display = "block";

    if(userpass.value != ""){
        if(userpass.value.match(uper)) {
            upcase.style.color = "green";
        }else{
            upcase.style.color = "red";
        }
        if(userpass.value.match(lower)) {
            locase.style.color = "green";
        }else{
            locase.style.color = "red";
        }
        if(userpass.value.match(num)) {
            numvalue.style.color = "green";
        }else{
            numvalue.style.color = "red";
        }
         if(userpass.value.match(spe)) {
            spechar.style.color = "green";
        }else{
            spechar.style.color = "red";
        }
         if(userpass.value.length >= len) {
            minlen.style.color = "green";
        }else{
            minlen.style.color = "red";
        }
}else{
    upcase.style.display = "none";
    locase.style.display = "none";
    numvalue.style.display = "none";
    spechar.style.display = "none";
    minlen.style.display = "none";

   }
} 