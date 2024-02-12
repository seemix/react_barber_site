import React from 'react';
import { useTranslation } from 'react-i18next';
import { SlClock } from 'react-icons/sl';
import { motion } from 'framer-motion';

import css from './SingleServiceCard.module.css';
import { blockAnimation } from './animations';

const SingleServiceCard = ({ id, icon, services }) => {
    const { t } = useTranslation();

    return (
        <motion.div className={'card ' + css.service_card}
                    custom={id + 1.5}
                    initial={'hidden'}
                    whileInView={'visible'}
                    variants={blockAnimation}
                    viewport={{ once: true }}
        >
            <div className={css.price_icon_wrap}>
                {icon}
            </div>
            {
                services.map((service, index) =>
                    <div className={css.price_item} key={index}>
                        <h4>{t(service.name)}</h4>
                        <span className={css.time}>
                            <SlClock/> {service.duration} {t('minutes')}
                        </span>
                    </div>)
            }
        </motion.div>
    );
};

export default SingleServiceCard;