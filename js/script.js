"use strict";

const swiper1 = new Swiper(".swiper-1", {
  direction: "horizontal",
  loop: true,
  speed: 500,
  effect: "slider", //slider, cards, coverflow, flip, fade, cube (способ перелистывания)
  centeredSlides: false, //центрирование слайдов
  spaceBetween: 15,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      slideToClickedSlide: true,
    },
    768: {
      slidesPerView: 2,
      slideToClickedSlide: true,
    },
  },
});

const swiper2 = new Swiper(".swiper-2", {
  direction: "horizontal",
  loop: true, //если true - то круговой слайдер
  speed: 500,
  effect: "slider", //slider, cards, coverflow, flip, fade, cube (способ перелистывания)
  centeredSlides: true, //центрирование слайдов

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    type: "fraction",
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      slideToClickedSlide: true,
      centeredSlides: true,
    },
    768: {
      slidesPerView: 2,
      slideToClickedSlide: true,
      centeredSlides: false,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
  },

  // Автоматическое перелистывание
  autoplay: {
    delay: 4000,
  },
});
