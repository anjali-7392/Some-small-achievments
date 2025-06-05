uform = document.querySelector(".uform");
uname = document.querySelector(".uname");
upass = document.querySelector(".upass");

uform.onsubmit = ()=>{
   // if(uname.value == ""){
   //     alert ("Please fill this field!");
   // }else{
   //    alert("successfully submit.")
   // }

if (upass.value.length >=8){
    alert("Password strong");
}else{
    alert("Password weak");
}
}