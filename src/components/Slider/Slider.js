import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { swiperSettings } from './swiperSettings';
import { BookingButton, WelcomeHeader } from '../index';
import css from './Slider.module.css';
import { useQuery } from '@apollo/client';

const slides = ['/slides/1.webp', '/slides/2.webp', '/slides/3.webp', '/slides/4.webp', '/slides/5.webp'];
const Slider = () => {
    const getSlides = `{
  barbers {
    nodes {
      barbers {
        description
        name
      }
      barberId
      featuredImage {
        node {
          mediaItemUrl
        }
      }
    }
  }
}`;

    return (
        <div className={css.slider_container}>
            <Swiper
                {...swiperSettings}
            >
                {slides.map(slide => <SwiperSlide key={slide}>
                    <div className={css.pic} style={{ backgroundImage: `url(${slide})` }}/>
                </SwiperSlide>)}
            </Swiper>
            <div className={css.overlay}/>
            <div className={css.slider_welcome}>
                <WelcomeHeader/>
                <BookingButton/>
            </div>

        </div>
    );
};

export default Slider;