import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

import { headerAnimation } from './animations';
import { assets } from '../../../assets/common';

const WelcomeHeader = () => {
    const { t } = useTranslation();
    return (
        <>
            <motion.h1
                custom={3}
                viewport={{ once: true }}
                initial={'hidden'}
                whileInView={'visible'}
                variants={headerAnimation}
            >
                {t('welcome')} {assets.barbershopName}
            </motion.h1>

        </>
    );
};

export default WelcomeHeader;