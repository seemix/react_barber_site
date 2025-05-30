import React from 'react';
import { useTranslation } from 'react-i18next';
import { SlClock } from 'react-icons/sl';
import { motion } from 'framer-motion';

import { blockAnimation } from './animations';
import { animation } from '../../../assets/common';
import css from './SingleServiceCard.module.css';

const SingleServiceCard = ({ id, icon, services }) => {
    const { t } = useTranslation();

    return (
        <motion.div className={'card ' + css.service_card}
                    {...animation}
                    custom={id + 1.5}
                    variants={blockAnimation}
        >
            <div className={css.price_icon_wrap}>
                {icon}
            </div>
            {
                services.map((service, index) =>
                    <div className={css.price_item} key={index}>
                        <h3>{t(service.name)}</h3>
                        <div className={css.time}>
                            <SlClock/> {service.duration} {t('minutes')}
                        </div>
                    </div>)
            }
        </motion.div>
    );
};

export default SingleServiceCard;