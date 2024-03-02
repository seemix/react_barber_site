import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useQuery } from '@apollo/client';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { swiperSettings } from './swiperSettings';
import { BookingButton, WelcomeHeader } from '../index';
import { ALL_SLIDES, slideMapper } from './query';
import css from './Slider.module.css';
import { animation } from '../../assets/common';
import { slideAppearAnimation } from './animations';

const Slider = () => {
    const { data } = useQuery(ALL_SLIDES);

    let slides;
    if (data) slides = slideMapper(data);

    return (
        <main className={css.slider_container}>
            {slides && <motion.div
                {...animation}
                variants={slideAppearAnimation}
            >
                <Swiper {...swiperSettings}  >
                    { slides.map((slide, index) => (<SwiperSlide key={slide.id}>
                            <img src={slide.slide} alt={`slide${index}`} className={css.pic}
                                 srcSet={slide.slide}
                                 fetchpriority={'high'}
                            />
                        </SwiperSlide>))}
                </Swiper>
            </motion.div> }
            <div className={css.overlay}/>
            <div className={css.slider_welcome}>
                <WelcomeHeader/>
                <BookingButton/>
            </div>
        </main>
    );
};

export default Slider;