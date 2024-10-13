import React from 'react';
import { useQuery } from '@apollo/client';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { useTranslation } from 'react-i18next';
import 'swiper/css/navigation';

import { Loader, SectionHeader, SingleBarber } from '../index';
import { swiperSettings } from './swiperSettings';
import { ALL_BARBERS, barbersMapper } from './query';
import { animation } from '../../assets/common';
import { blockAnimation } from './animations';
import css from './Barbers.module.css';

const Barbers = () => {

    const { i18n } = useTranslation();
    const { data, loading } = useQuery(ALL_BARBERS(i18n.language));
    let barbers;
    if (data) barbers = barbersMapper(data);
    return (
        <section id={'barbers'}>
            <SectionHeader caption={'ourBarbers'}/>
            {loading && <><Loader/></>}
            {/*{loading && <h1>LOADING...</h1>}*/}
            <motion.div className={css.barbers_container}
                        {...animation}
                        custom={1}
                        variants={blockAnimation}
            >
                <Swiper {...swiperSettings} className={css.slider_container}>
                    {barbers && barbers.map((barber, index) =>
                        <SwiperSlide key={barber.id}>
                            <SingleBarber barber={barber} index={index}/>
                        </SwiperSlide>)
                    }
                </Swiper>
            </motion.div>
        </section>
    );
};

export default Barbers;