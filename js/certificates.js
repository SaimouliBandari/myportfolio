import {DATA} from "../database/data.js";
var domWidth = $(document).width();
var gridView, listView, icon = $(".grid-icon").attr("src") ;
var renderOnce = true;
$(document).ready(function () {
    if(domWidth <= 425){
        $(".certificatesDiv").addClass("order-first");
    }
    $(".viewButton").click(
        
        
        function(){
            
            gridView = "images/grid-icon-12.jpg";
            listView = "images/list.png";
            icon = $(".grid-icon").attr("src");
            
            if(icon === gridView){
                $(".grid-icon").attr("src" , listView);
                $("table.t_view").removeClass("d-none");
                if(renderOnce){
                    listdisp();
                    renderOnce = false;
                }
            }else{
                $(".grid-icon").attr("src" ,gridView);
                $("table.t_view").addClass("d-none");
                griddisp();
            }

        }
       
    );
    
    function listdisp() {
        // console.log("List View");

        for (let i = 0; i < DATA.length; i++) {
           
            $(".t_view_body").append(`<tr id="R${i}">
            <td >
            ${DATA[i].id + 1}
            </td>
            <td>
              ${DATA[i].Name} Certificate
            </td>
            <td>
            </td>
             </tr>`).css("color","white");
            // console.log(new Image(DATA[i].src).sizes);
        };

    };

    function griddisp() {
        console.log("Grid View");
    };

});