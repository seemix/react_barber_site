import React from 'react';
import { useTranslation } from 'react-i18next';
import { MdPhoneIphone } from 'react-icons/md';

import logo from '../Header/logo.webp';
import { BookingButton } from '../index';
import css from './Footer.module.css';

const Footer = () => {
    const { t } = useTranslation();
    return (
        <footer className={css.footer}>
            <div className={css.footer_widget}>
                <img src={logo} alt="logo" width={220} height={64} loading={'lazy'}/>
            </div>
            <div className={css.footer_widget}>
                <h5>{t('address')}</h5>
                <p>{t('streetNumber')}</p>
                <p><MdPhoneIphone size={'1.1em'}/><a href={'tel:+37360233555'}> +37360233555</a></p>
            </div>++++
            <div className={css.footer_widget}>
                <h5>{t('workHours')}</h5>
                <p>{t('monSat')} </p>
                <p>{t('sun')} </p>
            </div>
            <div className={css.footer_widget}>
                <h5>{t('makeAppointment')}</h5>
                <BookingButton/>
            </div>
        </footer>
    );
};

export default Footer;