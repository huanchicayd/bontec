function ativarSelect(){selectActivation.addEventListener("click",function(e){e.stopPropagation(),"1"===selectMenu.style.opacity?(selectMenu.style.opacity="0",selectMenu.style.zIndex="-1"):(selectMenu.style.opacity="1",selectMenu.style.zIndex="1"),colocarTextoMenuSelected()})}function fecharSelectOutsideClick(){window.addEventListener("mouseup",function(e){e.target!==selectMenu&&e.target.parentNode!==selectMenu&&e.target!==selectActivation&&(selectMenu.style.opacity="0",selectMenu.style.zIndex="-1")})}function colocarTextoMenuSelected(){var e=document.querySelectorAll(".contato-geral__formulario__lista a");for(i=0;i<e.length;i++)e[i].addEventListener("click",function(e){e.preventDefault();var t=this.textContent;selectActivation.value=t,selectMenu.style.opacity="0",selectMenu.style.zIndex="-1"})}var selectActivation=document.querySelector(".contato-geral__formulario__selected"),selectMenu=document.querySelector(".contato-geral__formulario__lista");fecharSelectOutsideClick(),ativarSelect();