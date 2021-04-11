

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


$(".js-hamburger").click(function () {
  $(this).toggleClass("is-active");
}); 

//	шапка

function scroll() {
  if ($(this).scrollTop() > 130) {
    $(".header-wrapper").addClass("scrolled")
  } else {
    $(".header-wrapper").removeClass("scrolled")
  }
}

document.addEventListener("DOMContentLoaded", () => {
  window.addEventListener("load", scroll);
  window.addEventListener("scroll", scroll);
});