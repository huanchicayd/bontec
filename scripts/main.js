$(document).ready(function(){

    $('.home-slider').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 2500,
        speed: 2000
    });
});

function ativarMenuMobile(){
    var btn = document.querySelector('.main-nav__btn');
    var menu = document.querySelector('.main-nav__navmenu');
    console.log(btn);

    btn.addEventListener('click', function(){
        console.log("Cliquei");
        //menu.classList.add('main-nav__navmenu--active');
        document.documentElement.classList.add('main-nav__navmenu--active');
    });
}

ativarMenuMobile();