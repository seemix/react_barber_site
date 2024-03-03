import { Navigation, Pagination } from 'swiper/modules';

export const swiperSettings = {
    autoHeight: true,
    slidesPerView: 1,
    spaceBetween: 10,
    style: { zIndex: 0 },
    breakpoints: {
        '@0.00': {
            slidesPerView: 1.2,
            spaceBetween: 5,
        },
        '@0.50': {
            slidesPerView: 1.2,
            spaceBetween: 10,
        },
        '@0.60': {
            slidesPerView: 1.3,
            spaceBetween: 10,
        },
        '@0.75': {
            slidesPerView: 1.8,
            spaceBetween: 10,
        },
        '@1.00': {
            slidesPerView: 2.5,
            spaceBetween: 10,
        },
        '@1.25': {
            slidesPerView: 2.9,
            spaceBetween: 10,
        },
        '@1.50': {
            slidesPerView: 4,
            spaceBetween: 15,
        },
        '@1.80': {
            slidesPerView: 4,
           spaceBetween: 80
        }
    },
    loop: true,
    navigation: true,
    modules: [Pagination, Navigation],
    className: 'swiper_wrap'
}