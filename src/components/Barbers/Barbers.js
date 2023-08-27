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
import { motion } from 'framer-motion';

import { topAnimation, titleAnimation, bottomAnimation } from '../../constants/animations';

const Barbers = () => {
    const { t } = useTranslation();
    return (
        <div className={'barbers'}>
            <motion.h3
                custom={2}
                initial={'hidden'}
                whileInView={'visible'}
                variants={topAnimation}
            >LevelUP Barbershop
            </motion.h3>
            <motion.h2
                custom={2.5}
                initial={'hidden'}
                whileInView={'visible'}
                variants={titleAnimation}
            >{t('ourBarbers')}
            </motion.h2>
            <motion.div
                custom={2}
                initial={'hidden'}
                whileInView={'visible'}
                variants={bottomAnimation}
                className={'heading_line'}>
            </motion.div>
            <motion.div custom={2} initial={'hidden'} whileInView={'visible'} variants={titleAnimation}>
               <div style={{maxWidth: '100vw', boxSizing: 'border-box', overflowX: 'hidden'}}>
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
                        barbers.map(barber =>
                            <SwiperSlide key={barber.id}>
                                <SingleBarber barber={barber}
                                />
                            </SwiperSlide>)
                    }

                </Swiper>
               </div>
            </motion.div>
        </div>
    );
};

export default Barbers;