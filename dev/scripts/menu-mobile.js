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