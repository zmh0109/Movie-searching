$(document).ready(function(){

    $(window).scroll(function(){
        var a = $(window).scrollTop();
        if(a>0){
            $("#nav-bar").animate({height: "50px"},100);
            $(".title").animate({ fontSize: "10px" }, 100 );
        }else {
            $("#nav-bar").animate({height: "80px"},100);
            $(".title").animate({fontSize: "20px"},100);

        }
    });



    $(document).foundation({

        orbit: {
            animation: 'fade'



        }


    });

});
