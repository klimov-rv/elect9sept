// для модалок
$(document).ready(function () {
    $(".fancybox").fancybox();
});
// анимация появления по скроллк
AOS.init({
    easing: 'ease-in-out-sine',
    once: true
});
//	Mmenu
var menu = new MmenuLight(
    document.querySelector('#menu'),
    'all'
);

var navigator = menu.navigation({
});

var drawer = menu.offcanvas({
});

document.querySelector('a[href="#menu"]')
    .addEventListener('click', evnt => {
        evnt.preventDefault();
        drawer.open();
    }); 

//	burger button
$(".js-hamburger").click(function () {
    $(this).toggleClass("is-active");
});