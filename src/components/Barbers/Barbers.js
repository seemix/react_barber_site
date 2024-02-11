import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { barbers } from './barbersData';
import './Barbers.css';
import SingleBarber from './SingleBarber/SingleBarber';

import { SectionHeader } from '../index';

const Barbers = () => {
    return (
        <section id={'barbers'}>
            <SectionHeader caption={'ourBarbers'}/>
            <div className={'barbers_container'}>
                <Swiper
                    autoHeight={true}
                    slidesPerView={1}
                    spaceBetween={10}
                    style={{ zIndex: 0 }}
                    breakpoints={{
                        '@0.00': {
                            slidesPerView: 1.2,
                            spaceBetween: 5,
                        },
                        '@0.50': {
                            slidesPerView: 1.2,
                            spaceBetween: 10,
                        },
                        '@0.60': {
                            slidesPerView: 1.3,
                            spaceBetween: 10,
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
                    loop={true}
                    navigation
                    modules={[Pagination, Navigation]}
                    className="swiper_wrap"
                >
                    {
                        barbers.map((barber, index) =>
                            <SwiperSlide key={barber.id}>
                                <SingleBarber barber={barber} index={index}/>
                            </SwiperSlide>)
                    }

                </Swiper>
            </div>
        </section>
    );
};

export default Barbers;