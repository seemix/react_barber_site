import React from 'react';
import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { barbers } from './barbersData';

import './Barbers.css';
import SingleBarber from './SingleBarber';

const Barbers = () => {
    const { t } = useTranslation();
    return (
        <div className={'barbers'}>
            <h3>LevelUP Barbershop</h3>
                <h2>{t('ourBarbers')}</h2>
            <Swiper
                autoHeight={true}
                slidesPerView={1}
                spaceBetween={10}
                breakpoints={{
                    '@0.00': {
                        slidesPerView: 1.2,
                        spaceBetween: 5,
                    },
                    '@0.50': {
                        slidesPerView: 1.2,
                        spaceBetween: 5,
                    },
                    '@0.60': {
                        slidesPerView: 1.3,
                        spaceBetween: 5,
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
                        spaceBetween: 10,
                    },
                    '@1.80': {
                        slidesPerView: 4,
                        spaceBetween: 10
                    }

                }}
                loop={false}
                navigation
                modules={[Pagination, Navigation]}
                className="swiper_wrap"
            >
                {
                    barbers.map(barber =>
                        <SwiperSlide key={barber.id}>
                            <SingleBarber barber={barber}
                            />
                        </SwiperSlide>)
                }

            </Swiper>
        </div>
    );
};

export default Barbers;