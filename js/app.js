// 1st owl
$('#screen-carousel').owlCarousel({
  // items : 2,
  //  center: true,
  loop: true,
  smartSpeed: 650,
  nav: false,
  navText: [
    "<i class='fas fa-angle-left'></i>",
    "<i class='fas fa-angle-right'></i>"
  ],
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 2
    },
    1000: {
      items: 3
    }
  },
  autoplay: true,
  autoplayTimeout: 2000,
  autoplayHoverPause: true
});
// 2nd owl
$('#testi-carousel').owlCarousel({
  // items : 2,
  //  center: true,
  loop: true,
  smartSpeed: 650,
  nav: false,
  navText: [
    "<i class='fas fa-angle-left'></i>",
    "<i class='fas fa-angle-right'></i>"
  ],
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 1
    },
    1000: {
      items: 1
    }
  },
  autoplay: true,
  autoplayTimeout: 2000,
  autoplayHoverPause: true
});
$(window).scroll(function() {
  $('nav').toggleClass('scrolled', $(this).scrollTop() > 50);
});

var btn = $('#topButton');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({ scrollTop: 0 }, '300');
});
