import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

import './Slider.css';
import { buttonAnimation, headerAnimation } from '../../constants/animations';


const WelcomeButton = () => {
    const { t } = useTranslation();
    return (
        <div>
            <div className={'overlay'}>
                <div className={'slider_welcome'}>
                    <motion.h1
                        custom={3}
                        initial={'hidden'}
                        whileInView={'visible'}
                        variants={headerAnimation}
                    >{t('welcome')} LevelUP Barbershop</motion.h1>
                    <motion.div
                        custom={2}
                        initial={'hidden'}
                        whileInView={'visible'}
                        variants={buttonAnimation}>
                        <button
                            className={'button booking'}>{t('book')}</button>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default WelcomeButton;