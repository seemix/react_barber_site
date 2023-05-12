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
import sl1 from './slides/1.webp'
import sl2 from './slides/2.webp';
import sl3 from './slides/3.webp';
import sl4 from './slides/4.webp';
import sl5 from './slides/5.webp';
import WelcomeButton from './WelcomeButton';

const Slider = () => {
    // const { t } = useTranslation();
    return (
        <div>
            <Swiper
                spaceBetween={30}
                slidesPerView={1}
                autoplay={{
                    delay: 5500,
                    disableOnInteraction: false,
                }}
                effect={'fade'}
                pagination={{
                    clickable: true,
                }}
                modules={[Autoplay, EffectFade, Navigation, Pagination]}
                className={'slider_container'}
                loop={true}
            >

                <SwiperSlide>
                    <div style={{ backgroundImage: `url(${sl1})` }} className={'pic'}><WelcomeButton/></div>
                </SwiperSlide>
                <SwiperSlide>
                    <div style={{ backgroundImage: `url(${sl2})` }} className={'pic'}><WelcomeButton/></div>
                </SwiperSlide>
                <SwiperSlide>
                    <div style={{ backgroundImage: `url(${sl3})` }} className={'pic'}><WelcomeButton/></div>
                </SwiperSlide>
                <SwiperSlide>
                    <div style={{ backgroundImage: `url(${sl4})` }} className={'pic'}><WelcomeButton/></div>
                </SwiperSlide>
                <SwiperSlide>
                    <div style={{ backgroundImage: `url(${sl5})` }} className={'pic'}><WelcomeButton/></div>
                </SwiperSlide>


            </Swiper>
            {/*<div className='overlay_container'>*/}
            {/*    <div className='pic' id='pic1'/>*/}
            {/*    <div className='pic' id='pic2'/>*/}
            {/*    <div className='pic' id='pic3'/>*/}
            {/*    <div className='pic' id='pic4'/>*/}
            {/*    <div className={'overlay'}>*/}
            {/*        <div className={'slider_welcome'}>*/}
            {/*            <h1>{t('welcome')} LevelUP Barbershop</h1>*/}
            {/*            <div>*/}
            {/*                <button className={'button-5 booking'}>{t("book")}</button>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </div>
    );
};

export default Slider;