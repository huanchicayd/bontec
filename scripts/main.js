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

    btn.addEventListener('click', function(){
        document.documentElement.classList.add('main-nav__navmenu--active');
    });
}

ativarMenuMobile();