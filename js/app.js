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

// smooth scroll
$(document).ready(function() {
  // $fn.scrollSpeed(step, speed, easing);
  jQuery.scrollSpeed(80, 500);
});

// Custom scrolling speed with jQuery
// Source: github.com/ByNathan/jQuery.scrollSpeed
// Version: 1.0.2

(function($) {
  jQuery.scrollSpeed = function(step, speed, easing) {
    var $document = $(document),
      $window = $(window),
      $body = $('html, body'),
      option = easing || 'default',
      root = 0,
      scroll = false,
      scrollY,
      scrollX,
      view;

    if (window.navigator.msPointerEnabled) return false;

    $window
      .on('mousewheel DOMMouseScroll', function(e) {
        var deltaY = e.originalEvent.wheelDeltaY,
          detail = e.originalEvent.detail;
        scrollY = $document.height() > $window.height();
        scrollX = $document.width() > $window.width();
        scroll = true;

        if (scrollY) {
          view = $window.height();

          if (deltaY < 0 || detail > 0)
            root = root + view >= $document.height() ? root : (root += step);

          if (deltaY > 0 || detail < 0) root = root <= 0 ? 0 : (root -= step);

          $body.stop().animate(
            {
              scrollTop: root
            },
            speed,
            option,
            function() {
              scroll = false;
            }
          );
        }

        if (scrollX) {
          view = $window.width();

          if (deltaY < 0 || detail > 0)
            root = root + view >= $document.width() ? root : (root += step);

          if (deltaY > 0 || detail < 0) root = root <= 0 ? 0 : (root -= step);

          $body.stop().animate(
            {
              scrollLeft: root
            },
            speed,
            option,
            function() {
              scroll = false;
            }
          );
        }

        return false;
      })
      .on('scroll', function() {
        if (scrollY && !scroll) root = $window.scrollTop();
        if (scrollX && !scroll) root = $window.scrollLeft();
      })
      .on('resize', function() {
        if (scrollY && !scroll) view = $window.height();
        if (scrollX && !scroll) view = $window.width();
      });
  };

  jQuery.easing.default = function(x, t, b, c, d) {
    return -c * ((t = t / d - 1) * t * t * t - 1) + b;
  };
})(jQuery);
