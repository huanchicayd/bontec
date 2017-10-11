$(document).ready(function(){

    $('.home-slider').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 2500,
        speed: 2000
    });

    function voltarAoTopo() {
        $(document).on('scroll', function() {
            var y = $(this).scrollTop();
            if (y > 500) {
                $('a.btn-back').fadeIn();
            } else {
                $('a.btn-back').fadeOut();
            }
        });

        $('a.btn-back').click(function(){
            $('html, body').animate({
                scrollTop: 0
            }, 1000);
            return false
        });
    }
    voltarAoTopo();

    function ativarLinkNav(){
        var pgurl = window.location.href.substr(window.location.href.lastIndexOf('/') + 1);

        $('.main-nav__navmenu a').each(function(){
            if($(this).attr('href') === pgurl || $(this).attr('href') === ''){
                $(this).addClass('active-link');
            }
        });
    }
    ativarLinkNav();

    function ativarMenuMobile(){
        var $btn = document.querySelector('.main-nav__btn');
        var $btnFechar = document.querySelector('.main-nav__btn--fechar');

        $btn.addEventListener('click', function(){
            document.documentElement.classList.add('main-nav__navmenu--active');
        });

        $btnFechar.addEventListener('click', function(){
            document.documentElement.classList.remove('main-nav__navmenu--active');
        });
    }
    ativarMenuMobile();

});