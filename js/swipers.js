const introSwiper = new Swiper(".body-intro__slider", {
    spaceBetween: 10,
    navigation: {
        prevEl: ".body-intro__swiper-btn-prev",
        nextEl: ".body-intro__swiper-btn-next",
    },
    pagination: {
        el: ".intro-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 3000,
    },
    loop: true,
});
const aboutSwiper = new Swiper(".body-about__slider", {
    spaceBetween: 10,
    navigation: {
        prevEl: ".body-about__swiper-btn-prev",
        nextEl: ".body-about__swiper-btn-next",
    },
    pagination: {
        el: ".about-pagination",
        clickable: true,
    },
});
