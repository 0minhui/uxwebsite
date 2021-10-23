$(function(){

    $("nav a").click(function(){
        var btn =$(this).attr("href");
        var pos = $(btn).offset();
        $("html,body").animate({scrollTop: pos.top},1000);
    });

    $("#gotop").click (function(){
        $("html,body").animate({ scrollTop:0},1000);
    });
    /* --------------- */
    $(window).scroll (function(){
        if($(this).scrollTop() > 200){
            $('#gotop').stop().fadeTo('fast',.5);
        } else {
            $('#gotop').stop().fadeOut('fast');
        }
    });
    /* --------------- */
    $(window).scroll (function(){
        if($(this).scrollTop() > 400){
            $(".header").stop().fadeTo('fast',1);
        }else {
            $(".header").stop().fadeTo('fast',.75);
        }
    });

   /*  $(".aboutux",".about_cert").smoove({
            offset:'15%'
    });  */

    $('.box').smoove({
        offset:'30%'
    });

    $('.box1').smoove({
        offset:'10%'
    });

    



});

