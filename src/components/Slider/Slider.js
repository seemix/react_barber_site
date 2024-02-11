import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './Slider.css';

// import required modules
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';

import './Slider.css';
//import WelcomeButton from './WelcomeHeader';
import { BookingButton, WelcomeHeader } from '../index';

const slides = ['/slides/1.webp', '/slides/2.webp', '/slides/3.webp', '/slides/4.webp', '/slides/5.webp'];
const Slider = () => {
    const swiperSettings = {
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
        pagination: {
            clickable: true,
        },
        modules: [Autoplay, EffectFade, Navigation, Pagination],
        className: 'slider_container',
        loop: true
    }

    return (
        <div>
            <>
                <Swiper
                    {...swiperSettings}
                >
                    {slides.map(slide => <SwiperSlide key={slide}>
                        <div className={'pic'} style={{ backgroundImage: `url(${slide})` }}/>
                    </SwiperSlide>)}
                </Swiper>
                <div className={'overlay'}/>
                <div className={'slider_welcome'}>
                    <WelcomeHeader/>
                    <BookingButton/>
                </div>
            </>
        </div>
    );
};

export default Slider;