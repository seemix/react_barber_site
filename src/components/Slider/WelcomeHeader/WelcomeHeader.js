import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

import { headerAnimation } from './animations';
import { animation, assets } from '../../../assets/common';

const WelcomeHeader = () => {
    const { t } = useTranslation();
    return (
        <>
            <motion.h1
                {...animation}
                custom={3}
                variants={headerAnimation}
            >
                {t('welcome')} {assets.barbershopName}
            </motion.h1>

        </>
    );
};

export default WelcomeHeader;