var pgurl = window.location.href.substr(window.location.href.lastIndexOf('/') + 1);
if(pgurl === 'index.php') {
    (function(){
        var value = 400000000;
        var elemento = document.querySelector('#testando');
        var hidrometro = new Odometer ({
            el: elemento,
            value: value,
            format: '(.ddd)',
            theme: 'default'
        });

        setInterval(function(){
            hidrometro.update(value++);
        }, 3000);
    })();
}