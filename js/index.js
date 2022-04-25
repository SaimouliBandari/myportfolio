var txt = "Mouli is an aspiring and visonary individual currently pursuing his graduation " +
"in Electronic and Communication at Raghu Engineering College from city " +
"of Desitiny - Visakhapatnam.He is a fast learner and software developer "+
"enthusiast and loves building project.";

var i =0;
var speed = 60;
var finish = false;
function typeWriter() {
    if (i < txt.length) {
        document.getElementById("write").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
        if(i === (txt.length-1)){
            alert("This site is under Maintenance, I'm currently working on this webpage");
        }
    }
    
}
$(document).ready(function(){
    $("div.outer_avatar").hover(function(){
        $(".myName").text("2022 Graduate");
    },function(){
        $(".myName").text("Bandari Sai Mouli");
    }
    );
    setTimeout(function(){
        $(".ifram_display").remove();
        $(".text_display").add();
       $(this).delay(2000).queue(function(){
            typeWriter();
       });
       
    },9000);

    

   

   

   
    

  });