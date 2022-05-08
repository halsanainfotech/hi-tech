const swup = new Swup()

$(document).ready(function(){
   $(".menu").click(function(){
    $("nav").toggleClass("open");
    $(".menu").toggleClass("is-active");
    $(".nav").fadeToggle();
   });
});

$(document).ready(function(){
    $(".menu__bar").click(function(){
     $(".nav").toggleClass("open");
     $(".menu__bar").toggleClass("is-active");
    //  $(".nav").fadeToggle();
    });
});


