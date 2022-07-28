var domWidth = $(document).width();
$(document).ready(function () {
    if(domWidth <= 425){
        $(".certificatesDiv").addClass("order-first");
    }
    $(".viewButton").click(
        
        function(){
            var gridView = "images/grid-icon-12.jpg";
            var listView = "images/list.png";
            var icon = $(".grid-icon").attr("src");

            if(icon === listView){
                $(".grid-icon").attr("src" , "images/grid-icon-12.jpg");
            }else{
                $(".grid-icon").attr("src" , "images/list.png");
            }
        }
       
    );
   

});