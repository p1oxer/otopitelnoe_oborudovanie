const introSwiper = new Swiper(".body-intro__slider", {
    spaceBetween: 10,
    navigation: {
        prevEl: ".body-intro__swiper-btn-prev",
        nextEl: ".body-intro__swiper-btn-next",
    },
    pagination: {
        el: ".swiper-pagination-custom",
        clickable: true,
    },
    autoplay: {
        delay: 3000,
    },
    loop: true,
});
