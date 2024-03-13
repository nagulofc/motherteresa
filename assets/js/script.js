$(document).ready(function () {
  // ---> Site Header Shrink
  const siteHeader = $(".site-header");
  $(window).scroll(function () {
    if ($(document).scrollTop() > 30) {
      siteHeader.addClass("site-header--shrinked");
    } else {
      siteHeader.removeClass("site-header--shrinked");
    }

    // Scroll Top fade in out
    if ($(document).scrollTop() > 300) {
      $(".btn--scroll-to-top").addClass("show");
    } else {
      $(".btn--scroll-to-top").removeClass("show");
    }
  });

  $(".btn--scroll-to-top").on("click", function () {
    scrollToTop(0, 500);
  });

  function scrollToTop(offset, duration) {
    $("html, body").animate({ scrollTop: offset }, duration);
    return false;
  }

  // ---> Test Overflowing Element
  var docWidth = document.documentElement.offsetWidth;

  [].forEach.call(document.querySelectorAll("*"), function (el) {
    if (el.offsetWidth > docWidth) {
      console.log(el);
    }
  });

  // ---> Hero Carousel
  $(".hero-carousel").owlCarousel({
    loop: true,
    autoplay: true,
    autoplayHoverPause: true,
    smartSpeed: 1000,
    margin: 10,
    nav: true,
    navText: ["<i class='fa-solid fa-chevron-left'></i>", "<i class='fa-solid fa-chevron-right'></i>"],
    dots: true,
    items: 1,
    itemsDesktop: false,
    itemsDesktopSmall: false,
    itemsTablet: false,
    itemsMobile: false,
  });

    // ---> Doctors Carousel
    $(".doctors-carousel").owlCarousel({
      loop: true,
      autoplay: true,
      autoplayHoverPause: false,
      smartSpeed: 1000,
      items: 1,
      nav: false,
      navText: ["<i class='fa-solid fa-arrow-left-long'></i>", "<i class='fa-solid fa-arrow-right-long'></i>"],
      dots: true,
      responsive: {
        0: {
          items: 1,
          margin: 0,
        },
        576: {
          items: 2,
          margin: 0,
        },
        768: {
          items: 2,
          margin: 0,
        },
        992: {
          items: 3,
          margin: 0,
        },
        1200: {
          items: 4,
          margin: 0,
        },
        1400: {
          items: 4,
          margin: 0,
        },
        1700: {
          items: 4,
          margin: 0,
        },
      },
    });


  // ---> Testimonials Carousel
  $(".testimonial-carousel").owlCarousel({
    loop: true,
    autoplay: true,
    autoplayHoverPause: false,
    smartSpeed: 1000,
    items: 1,
    nav: false,
    navText: ["<i class='fa-solid fa-arrow-left-long'></i>", "<i class='fa-solid fa-arrow-right-long'></i>"],
    dots: true,
    responsive: {
      0: {
        items: 1,
        margin: 12,
      },
      576: {
        items: 1,
        margin: 12,
      },
      768: {
        items: 2,
        margin: 16,
      },
      992: {
        items: 2,
        margin: 20,
      },
      1200: {
        items: 3,
        margin: 24,
      },
      1400: {
        items: 3,
        margin: 28,
      },
      1700: {
        items: 3,
        margin: 32,
      },
    },
  });

  // ---> Accordion
  $(".set > a").on("click", function (e) {
    e.preventDefault();

    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $(this).siblings(".content").slideUp(200);
      $(".set > a i").removeClass("fa-minus").addClass("fa-plus");
    } else {
      $(".set > a i").removeClass("fa-minus").addClass("fa-plus");
      $(this).find("i").removeClass("fa-plus").addClass("fa-minus");
      $(".set > a").removeClass("active");
      $(this).addClass("active");
      $(".content").slideUp(200);
      $(this).siblings(".content").slideDown(200);
    }
  });

  // ---> Maginific Popup
  $(".gallery a").magnificPopup({
    type: "image",
    gallery: {
      enabled: true,
    },
  });

  $("#sc-2-tab").on("click", function () {
    $(".illus-gallery a").magnificPopup({
      type: "image",
      gallery: {
        enabled: true,
      },
    });
  });

  $("#sc-3-tab").on("click", function () {
    $(".char-gallery a").magnificPopup({
      type: "image",
      gallery: {
        enabled: true,
      },
    });
  });



  // ---> Filter Toggler Button
  // var isFilterActive = false;
  // $(".button--filter-toggler").on("click", function () {
  //   $("#filtersWrapper").toggleClass("d-none");

  //   if (!isFilterActive) {
  //     $(this).find("span").text("hide");
  //     isFilterActive = true;
  //   } else {
  //     $(this).find("span").text("show");
  //     isFilterActive = false;
  //   }
  // });

  // ---> Count up
  if ($("main").find("#counter").length) {
    var counted = 0;
    $(window).scroll(function () {
      var oTop = $("#counter").offset().top - window.innerHeight;
      if (counted == 0 && $(window).scrollTop() > oTop) {
        $(".count").each(function () {
          var $this = $(this),
            countTo = $this.attr("data-count");
          $({
            countNum: $this.text(),
          }).animate(
            {
              countNum: countTo,
            },

            {
              duration: 2000,
              easing: "swing",
              step: function () {
                $this.text(Math.floor(this.countNum));
              },
              complete: function () {
                $this.text(this.countNum);
                // alert('finished');
              },
            }
          );
        });
        counted = 1;
      }
    });
  }

  $(".btn--video-play").magnificPopup({
    disableOn: 700,
    type: "iframe",
    mainClass: "mfp-fade",
    removalDelay: 160,
    preloader: false,

    fixedContentPos: false,
  });

 

  // Mobile menu
 $(".site-header .offcanvas .site-header__nav-wrap nav ul li a i").on("click", function() {
    $(this).parent().next().toggle();
    $(this).toggleClass("active");
  })
});
