$(window).on('load', function () {
    // Cuando la página y todos los recursos estén completamente cargados, oculta la pantalla de carga
    $('.loader-wrapper').fadeOut('slow');
});

$(document).ready(function () {
    $('.banner__scroll-down').on('click touchstart', function () {
        $('html, body').animate({
            scrollTop: $('.sect--type').offset().top
        }, 1000); // 1000 es la duración de la animación en milisegundos
    });
});