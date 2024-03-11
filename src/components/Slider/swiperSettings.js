import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';

export const swiperSettings = {
    speed: 1500,
    spaceBetween: 0,
    slidesPerView: 1,
    autoplay: {
        delay: 5500,
        disableOnInteraction: false,
    },
    effect: 'fade',

    fadeEffect: {
        crossFade: true,
    },
    // pagination: {
    //     clickable: true,
    // },
    modules: [Autoplay, EffectFade, Navigation, Pagination],
    loop: true
}