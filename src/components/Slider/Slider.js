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
import { ALL_SLIDES, slideMapper } from './query';
import { animation } from '../../assets/common';
import { slideAppearAnimation } from './animations';
import css from './Slider.module.css';

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
                    {slides.map((slide, index) => (<SwiperSlide key={slide.id}>
                        <img alt={`slide${index}`} className={css.pic}
                             srcSet={slide.slide}
                             decoding={'async'}
                        />
                    </SwiperSlide>))}
                </Swiper>
            </motion.div>}
        </main>
    );
};

export default Slider;