import React from 'react';
import { useQuery } from '@apollo/client';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { barbers } from './barbersData';
import { Loader, SectionHeader, SingleBarber } from '../index';
import { swiperSettings } from './swiperSettings';
import css from './Barbers.module.css';
import { ALL_BARBERS, barbersMapper } from './query';

const Barbers = () => {
    const { loading, data, } = useQuery(ALL_BARBERS);
    let mapedData;
    if (data) mapedData = barbersMapper(data);
    console.log(mapedData);
    return (
        <section id={'barbers'}>
            <SectionHeader caption={'ourBarbers'}/>
            {loading && <Loader/>}
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