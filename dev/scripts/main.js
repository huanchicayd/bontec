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

    function ativarMenuMobile(){
        var btn = document.querySelector('.main-nav__btn');
        var btnFechar = document.querySelector('.main-nav__btn--fechar');

        btn.addEventListener('click', function(){
            document.documentElement.classList.add('main-nav__navmenu--active');
        });

        btnFechar.addEventListener('click', function(){
            document.documentElement.classList.remove('main-nav__navmenu--active');
        });
    }

    ativarMenuMobile();

    var selectActivation = document.querySelector('.contato-geral__formulario__selected-option');
    var selectMenu = document.querySelector('ul.contato-geral__formulario__select-items');

    function abrirSelectForm(){
        selectActivation.addEventListener('click', function() {

            if(selectMenu.style.opacity === '1'){
                selectMenu.style.opacity = '0';
                selectMenu.style.zIndex = '-1';
            } else {
                selectMenu.style.opacity = '1';
                selectMenu.style.zIndex = '1';
            }

            colocarTextoMenuSelected();
        });
    }

    function fecharSelectOutsideClick() {
        window.addEventListener('mouseup', function(evento) {
            if(evento.target !== selectMenu
                && evento.target.parentNode !== selectMenu
                && evento.target !== selectActivation){
                selectMenu.style.opacity = '0';
            }
        });
    }

    fecharSelectOutsideClick();

    function colocarTextoMenuSelected() {
        var selectMenuItems = document.querySelectorAll('.contato-geral__formulario__select-items a');

        for(i = 0; i < selectMenuItems.length; i++){
            selectMenuItems[i].addEventListener('click', function(e) {
                e.preventDefault();
                var texto = this.textContent;
                selectActivation.value = texto;
                selectMenu.style.opacity = '0';
                selectMenu.style.zIndex = '-1';
            });
        }
    }

    abrirSelectForm();
});