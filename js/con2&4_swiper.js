var swiper = new Swiper(".mySwiper", {
  slidesPerView: 4.5,
  spaceBetween: 30,
  pagination: {
    clickable: true,
  },
});

var swiper = new Swiper(".mySwiper4", {
  grabCursor: true,
  effect: "creative",
  creativeEffect: {
    prev: {
      shadow: true,
      translate: [0, 0, -400],
    },
    next: {
      translate: ["100%", 0, 0],
    },
  },
});