var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1.8,
  slidesPerGroup: 1,
  spaceBetween: 30,
  pagination: {
    clickable: true,
  },
  breakpoints: {
    641: {
      slidesPerView: 4.5, // 640px 이상에서 기존 코드 유지
      slidesPerGroup: 1,
    },
    461: {
      slidesPerView: 3.3,
      slidesPerGroup: 1,
    },
    380: {
      slidesPerView: 2.5,
      slidesPerGroup: 1,
    },
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