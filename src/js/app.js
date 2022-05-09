const swup = new Swup()

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


$(document).ready(function(){
    $(".menu__bar").click(function(){
        $(".nav").toggleClass("open");
        $(".menu__bar").toggleClass("is-active");
        $(".menu__close").toggleClass("menu__open")
    });
});


$(document).ready(function(){
    $(".menu__close").click(function(){
        $(".menu__close").removeClass("menu__open")
        $(".nav").removeClass("open");
        $(".menu__bar").removeClass("is-active");
    }); 
});

$(".menu__close").tap(function(){
    $(".menu__close").removeClass("menu__open")
    $(".nav").removeClass("open");
    $(".menu__bar").removeClass("is-active");
}); 