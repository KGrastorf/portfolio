angular.module("kevApp").controller("mainCtrl", function($scope, mainServ, $state) {




  function debounce(func, wait = 20, immediate = true) {
    var timeout;
    return function() {
      var context = this,
        args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };

  var didScroll;
  var lastScrollTop = 0;
  var delta = 22;
  var navbarHeight = $('header').outerHeight();

  $(window).scroll(function(event) {
    didScroll = true;
  });

  setInterval(function() {
    if (didScroll) {
      hasScrolled();
      didScroll = false;
    }
  }, 250);

  function hasScrolled() {
    var st = $(this).scrollTop();

    // Make sure they scroll more than delta
    if (Math.abs(lastScrollTop - st) <= delta)
      return;

    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight) {
      // Scroll Down
      $('header').removeClass('nav-up').addClass('nav-down');
    } else {
      // Scroll Up
      if (st + $(window).height() < $(document).height()) {
        $('header').removeClass('nav-down').addClass('nav-up');
      }
    }

    lastScrollTop = st;
  };

  $(document).ready(function() {
    $(window).scrollTop(0);
  });

  $("a[href='#top']").click(function() {
    $("html, body").animate({
      scrollTop: 0
    }, "slow");
    return false;
  });


  var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};


  // $(document).ready(function() {
  //   if( isMobile.any() ){
  //     $('.slide-in').addClass('active'),
  //     $('.slide-in-two').addClass('active'),
  //     $('.slide-in-three').addClass('active'),
  //     $('.slide-in-four').addClass('active'),
  //     $('.slide-in-five').addClass('active'),
  //     console.log("I love myself!");
  //
  //   } else {


      $(window).scroll(function() {
        var hT = $('.slide-in').offset().top,
          hH = $('.slide-in').outerHeight() / 3,
          wH = $(window).height(),
          wS = $(this).scrollTop();
        if (wS > (hT + hH - wH)) {
          $('.slide-in').addClass('active');
        } else if (wS < (hT + (hH * 2) - wH)) {
          $('.slide-in').removeClass('active');
        };

        var hT2 = $('.slide-in-two').offset().top,
          hH2 = $('.slide-in-two').outerHeight() / 3,
          wH2 = $(window).height(),
          wS2 = $(this).scrollTop();
        if (wS2 > (hT2 + hH2 - wH2)) {
          $('.slide-in-two').addClass('active');
        } else if (wS < (hT2 + (hH2 * 2) - wH2)) {
          $('.slide-in-two').removeClass('active');
        }


        var hT3 = $('.slide-in-three').offset().top,
          hH3 = $('.slide-in-three').outerHeight() / 3,
          wH3 = $(window).height(),
          wS3 = $(this).scrollTop();
        if (wS3 > (hT3 + hH3 - wH3)) {
          $('.slide-in-three').addClass('active');
        } else if (wS < (hT3 + (hH3 * 2) - wH3)) {
          $('.slide-in-three').removeClass('active');
        }


        var hT4 = $('.slide-in-four').offset().top,
          hH4 = $('.slide-in-four').outerHeight() / 3,
          wH4 = $(window).height(),
          wS4 = $(this).scrollTop();
        if (wS4 > (hT4 + hH4 - wH4)) {
          $('.slide-in-four').addClass('active');
        } else if (wS < (hT4 + (hH4 * 2) - wH4)) {
          $('.slide-in-four').removeClass('active');
        }

        var hT5 = $('.slide-in-five').offset().top,
          hH5 = $('.slide-in-five').outerHeight() / 3,
          wH5 = $(window).height(),
          wS5 = $(this).scrollTop();
        if (wS5 > (hT5 + hH5 - wH5)) {
          $('.slide-in-five').addClass('active');
        } else if (wS < (hT5 + (hH5 * 2) - wH5)) {
          $('.slide-in-five').removeClass('active');
        }

      });
  //   }
  //
  // });


});
