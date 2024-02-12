import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { barbers } from './barbersData';
import { swiperSettings } from './swiperSettings';
import  css from'./Barbers.module.css';

import { SectionHeader, SingleBarber } from '../index';

const Barbers = () => {
    return (
        <section id={'barbers'}>
            <SectionHeader caption={'ourBarbers'}/>
            <div className={css.barbers_container}>
                <Swiper {...swiperSettings}>
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