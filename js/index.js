var txt = "An aspiring and visonary individual currently pursuing his graduation " +
"in Electronic and Communication at Raghu Engineering College from city " +
"of Desitiny - Visakhapatnam.He is a fast learner and software developer "+
"enthusiast and loves building project.";
var i =0;
var speed = 60;
function typeWriter() {
    if (i < txt.length) {
        document.getElementById("demo").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
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