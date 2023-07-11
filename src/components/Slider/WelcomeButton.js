import React from 'react';
import './Slider.css';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const headerAnimation = {
    hidden: {
        x: -200,
        opacity: 0
    },
    visible: custom => ({
        x: 0,
        opacity: 1,
        transition: { delay: custom * 0.2 }
    })
};

const buttonAnimation = {
    hidden: {
        x: 200,
        opacity: 0
    },
    visible: custom => ({
        x: 0,
        opacity: 1,
        transition: { delay: custom * 0.2 }
    })
}
const WelcomeButton = () => {
    const { t } = useTranslation();
    return (
        <div>
            <div className={'overlay'}>
                <div className={'slider_welcome'}>
                    <motion.h1
                        custom={1.5}
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
                            className={'button-5 booking'}>{t('book')}</button>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default WelcomeButton;