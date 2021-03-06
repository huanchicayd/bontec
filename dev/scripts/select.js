(function(){
    'use strict';

    var pgurl = window.location.href.substr(window.location.href.lastIndexOf('/') + 1);
    if(pgurl === 'contato.php'){

        (function(){
            var $selectActivation = document.querySelector('.contato-geral__formulario__selected');
            var $selectMenu = document.querySelector('.contato-geral__formulario__lista');

            function ativarSelect() {
                $selectActivation.addEventListener('click', function(event) {
                    event.preventDefault();
                    event.stopPropagation();

                    if($selectMenu.style.opacity === '1'){
                        $selectMenu.style.opacity = '0';
                        $selectMenu.style.zIndex = '-1';
                    } else {
                        $selectMenu.style.opacity = '1';
                        $selectMenu.style.zIndex = '1';
                    }
                    colocarTextoMenuSelected();
                    fecharSelectOutsideClick();
                });
            }

            function fecharSelectOutsideClick() {
                window.addEventListener('mouseup', function(evento) {
                    if(evento.target !== $selectMenu
                        && evento.target.parentNode !== $selectMenu
                        && evento.target !== $selectActivation){
                        $selectMenu.style.opacity = '0';
                        $selectMenu.style.zIndex = '-1';
                    }
                });
            }

            function colocarTextoMenuSelected() {
                var $selectMenuItems = document.querySelectorAll('.contato-geral__formulario__lista a');

                for(var i = 0; i < $selectMenuItems.length; i++){
                    $selectMenuItems[i].addEventListener('click', function(e) {
                        e.preventDefault();
                        var $selectedItemText = this.textContent;
                        $selectActivation.value = $selectedItemText;
                        $selectMenu.style.opacity = '0';
                        $selectMenu.style.zIndex = '-1';
                    });
                }
            }
            ativarSelect();
        })();
    }
})();

