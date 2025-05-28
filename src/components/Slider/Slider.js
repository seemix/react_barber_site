import React, { useEffect, useState } from 'react';
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
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const getImageForWidth = ({slide}) => {
        if (windowWidth <= 480) {
            return slide.replace(/(\.[a-z]+)$/i, `-480x270$1`);
        }
        if (windowWidth <= 768) {
            return slide.replace(/(\.[a-z]+)$/i, `-768x432$1`);
        }
        return slide;
    };
       return (
        <main className={css.slider_container}>
            {slides && <motion.div
                {...animation}
                variants={slideAppearAnimation}
            >
                <Swiper {...swiperSettings}  >
                    {slides &&
                        slides.map((slide, index) => {
                            const image = getImageForWidth(slide);
                            return (
                                <SwiperSlide key={index}>
                                    <img alt={`slide${index}`} className={css.pic}
                                         src={image}
                                         decoding={'async'}
                                    />
                                    {/*<div className={css.slider_image} style={{ backgroundImage: `url(${image})` }}/>*/}
                                    {/*<div className={css.slider_overlay}/>*/}
                                </SwiperSlide>)
                        })
                    }
                </Swiper>
            </motion.div>}
        </main>
    );
};

export default Slider;