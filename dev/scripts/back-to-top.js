function voltarParaTopo(){
    'use strict';

    var $document = document.querySelector('html');
    var $btnBack = document.querySelector('a.btn-back');

    window.addEventListener('scroll', function(){
        var eixoY = $document.scrollTop;

        eixoY > 500 ? $btnBack.style.display = 'block' : $btnBack.style.display = 'none';
    });

    $btnBack.addEventListener('click', function() {

    })
}

voltarParaTopo();