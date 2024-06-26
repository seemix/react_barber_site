import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

import { bookingButtonAnimation } from './animations.js';
import { animation } from '../../assets/common';
import css from './BookingButton.module.css';

const BookingButton = () => {
    const { t } = useTranslation();

    return (
        <motion.button className={css.booking_button + ' booking'}
                       {...animation}
                       variants={bookingButtonAnimation}
                       exit={'quit'}
                       whileHover={'hover'}
                       whileTap={'tap'}

        >
            {t('book')}
        </motion.button>
    );
};

export default BookingButton;