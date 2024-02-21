import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useQuery } from '@apollo/client';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { swiperSettings } from './swiperSettings';
import { BookingButton, Loader, WelcomeHeader } from '../index';
import { ALL_SLIDES, slideMapper } from './query';
import css from './Slider.module.css';

const Slider = () => {
    const { data, loading } = useQuery(ALL_SLIDES);

    let slides;
    if (data) slides = slideMapper(data);

    return (
        <main className={css.slider_container}>
            {loading && <Loader/>}
            <Swiper {...swiperSettings}  >
                {
                    slides && slides.map(slide => <SwiperSlide key={slide.id}>
                        <div className={css.pic} style={{ backgroundImage: `url(${slide.slide})` }}/>
                    </SwiperSlide>)
                }
            </Swiper>

            <div className={css.overlay}/>
            <div className={css.slider_welcome}>
                {!loading &&
                    <>
                        <WelcomeHeader/>
                        <BookingButton/>
                    </>
                }
            </div>
        </main>
    );
};

export default Slider;