function ativarLinkNav(){
    'use strict';

    var pgurl = window.location.href.substr(
        window.location.href.lastIndexOf('/') + 1
    );
    var $navMenuLinks = $('.main-nav__navmenu a');
    $navMenuLinks.each(function(){
        if($(this).attr('href') === pgurl || $(this).attr('href') === '')
            $(this).addClass('active-link');
    });
}
ativarLinkNav();