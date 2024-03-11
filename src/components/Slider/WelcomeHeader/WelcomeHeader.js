import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

import { animation, assets } from '../../../assets/common';
import { headerAnimation } from './animations';
import css from './WelcomeHeader.module.css';

const WelcomeHeader = () => {
    const { t } = useTranslation();
    return (
        <div className={css.welcome}>
            <motion.h1
                {...animation}
                custom={0}
                variants={headerAnimation}
            >
                {t('welcome')} {assets.barbershopName}
            </motion.h1>
        </div>
    );
};

export default WelcomeHeader;