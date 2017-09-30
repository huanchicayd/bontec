var selectActivation = document.querySelector('.contato-geral__formulario__selected');
var selectMenu = document.querySelector('.contato-geral__formulario__lista');

function ativarSelect() {
    selectActivation.addEventListener('click', function(evento) {
        evento.stopPropagation();

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
            selectMenu.style.zIndex = '-1';
        }
    });
}
fecharSelectOutsideClick();

function colocarTextoMenuSelected() {
    var selectMenuItems = document.querySelectorAll('.contato-geral__formulario__lista a');
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

ativarSelect();