$(document).ready(() => {
  $(".menu-open").click(() => {
    $(".menu-wrapper").addClass("active");
  });
  $(".close").click(() => {
    $(".menu-wrapper").removeClass("active");
  });
  $(document).scroll(() => {
    $(".navbar").toggleClass(
      "active",
      $(this).scrollTop() > $(".navbar").height()
    );
  });
});

// swiper
var swiper = new Swiper(".mySwiperHome", {
  autoplay: {
    delay: "2000",
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

var swiper = new Swiper(".mySwiperProduct", {
  slidesPerView: 1,
  spaceBetween: 50,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 50,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 50,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },
  navigation: {
    nextEl: ".bxs-chevron-right-circle",
    prevEl: ".bxs-chevron-left-circle",
  },
});

var swiper = new Swiper(".mySwiperTesti", {
  spaceBetween: 100,
  autoplay: {
    delay: "2000",
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});
// swiper

// aos
AOS.init();
