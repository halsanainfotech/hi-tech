const swup = new Swup()

$(document).ready(function(){
    $(".menu__bar").click(function(){
     $(".nav").toggleClass("open");
     $(".menu__bar").toggleClass("is-active");
    //  $(".nav").fadeToggle();
    });
});

$(".logo").click(function(){
    $(".nav__link").removeClass("active");
    $(".nav_home").addClass("active");
}) 

$(".nav__logo").click(function(){
    $(".nav__link").removeClass("active");
    $(".nav_home").addClass("active");
}) 

$(".nav__link").click(function(){

    let key = $(this);
    if(key.hasClass("active")) return;
    $(".nav__link").removeClass("active");
    key.addClass("active");
    window.scrollTo(0, 0)

})



