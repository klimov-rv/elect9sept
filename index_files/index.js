

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

// фильтр кандидатов по городу
var filter_select_el = document.getElementById('selectcity');
var items_el = document.getElementById('candidates');

filter_select_el.onchange = function() {
	console.log(this.value);
  var items = items_el.getElementsByClassName('candidates__card');
  for (var i=0; i<items.length; i++) {
  	if (items[i].classList.contains(this.value)) {
    	items[i].style.display = 'flex';
    } else {
    	items[i].style.display = 'none';
    }
  }
};
