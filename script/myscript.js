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
        if($(this).scrollTop() > 100){
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



    $('.aboutuxdiv').smoove({
        offset:'40%',
    });  

    $('.about_cert').smoove({
        offset:'30%',
        moveX:'-150%'
    });

    $('.box1').smoove({
        offset:'10%'
    });


    $('.box2').smoove({
        offset:'20%'
    });

   
        $("h5").click(function(){
            $('.minnav').fadeToggle("fast");
            
        })



/*     $("header>nav>ul>li").on({
        mouseover:function(){
        $(this).css("background-color","#48405f");
        $(this).children("div").stop().slideDown();
        },
        mouseout:function(){
        $(this).css("background-color", "#AB2A4C");
        $(this).children("div").stop().slideUp();
        },
        click:function(){
        $(this).css("background-color", "#920DOD"); 
        } 
    }); */
    
});

