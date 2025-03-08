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

const reviewsSwiper = new Swiper(".reviews__slider", {
    slidesPerView: 2,
    navigation: {
        prevEl: ".reviews__swiper-btn-prev",
        nextEl: ".reviews__swiper-btn-next",
    },

    pagination: {
        el: ".reviews-pagination",
        clickable: true,
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        767: {
            spaceBetween: 15,
        },
        992: {
            spaceBetween: 30,
        },
    },
});
const worksSwiper = new Swiper(".works__slider", {
    slidesPerView: 2,
    navigation: {
        prevEl: ".works__swiper-btn-prev",
        nextEl: ".works__swiper-btn-next",
    },

    pagination: {
        el: ".works-pagination",
        clickable: true,
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        600: {
            spaceBetween: 15,
        },
        992: {
            spaceBetween: 30,
        },
    },
});
