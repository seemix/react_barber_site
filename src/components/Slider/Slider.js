import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './Slider.css';

// import required modules
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper';
import './Slider.css';
import WelcomeButton from './WelcomeButton';

const slides = ['/slides/1.webp', '/slides/2.webp', '/slides/3.webp', '/slides/4.webp', '/slides/5.webp'];
const Slider = () => {
    return (
        <div>
            <Swiper
                speed={1500}
                spaceBetween={30}
                slidesPerView={1}
                autoplay={{
                    delay: 5500,
                    disableOnInteraction: false,
                }}
                effect={'fade'}

                fadeEffect={{
                    crossFade: false,
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[Autoplay, EffectFade, Navigation, Pagination]}
                className={'slider_container'}
                loop={true}
            >
                {slides.map(slide => <SwiperSlide key={slide}>
                    <div className={'pic'} style={{ backgroundImage: `url(${slide})` }}><WelcomeButton/></div>
                </SwiperSlide>)}
            </Swiper>
        </div>
    );
};

export default Slider;