$(document).ready(function () {
    $('.banner__scroll-down').click(function () {
        $('html, body').animate({
            scrollTop: $('.sect--type ').offset().top
        }, 1000); // 1000 es la duración de la animación en milisegundos
    });
});