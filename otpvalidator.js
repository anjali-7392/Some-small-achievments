otpgenerate = document.querySelector(".otpgenerate");
otptxt = document.querySelector(".otptxt");
otpmsg = document.querySelector(".otpmsg");
yourotp = document.querySelector(".yourotp");
otpvalidate = document.querySelector(".otpvalidate");
otp = Math.ceil(Math.random()*(999999-100000+1)+100000);
otpgenerate.onclick=()=>{
    otptxt.innerHTML = otp;
}

otpvalidate.onclick = ()=>{
    if(otp== yourotp.value){
        otpmsg.innerHTML = "OTP Valid";
        otpmsg.style.color = "green";
        otpmsg.style.fontWeight = "bold";
        otpmsg.style.display = "block";
    }else{
         otpmsg.innerHTML = "OTP not Valid";
        otpmsg.style.color = "red";
        otpmsg.style.fontWeight = "bold";
        otpmsg.style.display = "block";
        
    }
}