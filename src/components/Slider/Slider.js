import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { swiperSettings } from './swiperSettings';
import { animation } from '../../assets/common';
import { slideAppearAnimation } from './animations';
import css from './Slider.module.css';

const Slider = ({ slides }) => {
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