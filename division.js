btn = document.querySelector(".btn");
btn.onclick=()=>{
    marks = document.querySelector(".marks");
    percentage = document.querySelector(".percentage");
    division = document.querySelector(".division");

    totalmark = parseInt(marks.value);
    per = totalmark/5
    percentage.innerHTML = per + "%";
    
    if(per <= 100 && per >=30){
        if(per> 60){
            division.innerHTML = "First";
        }else if (per >=50){
            division.innerHTML = "Second";
        }else{
            division.innerHTML = "Third";
        }
    }else{
        alert("Fail");
    }
}