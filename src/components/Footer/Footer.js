import React from 'react';
import PhoneIphoneOutlinedIcon from '@mui/icons-material/PhoneIphoneOutlined';
import { useTranslation } from 'react-i18next';

import './Footer.css';
import logo from '../../logo.png';

const Footer = () => {
    const { t } = useTranslation();
    return (
        <div className={'footer'}>
            <div className={'footer_widget'}>
                <img className={'main_logo'} src={logo} alt="logo"/>
            </div>
            <div className={'footer_widget'}>
                <h5>{t('address')}</h5>
                <p>{t('streetNumber')}</p>
                <p><PhoneIphoneOutlinedIcon/>+37360233555</p>
            </div>
            <div className={'footer_widget'}>
                <h5>{t('workHours')}</h5>
                <p>{t('monSat')} </p>
                <p>{t('sun')} </p>
            </div>
            <div className={'footer_widget'}>
                <h5>{t('makeAppointment')}</h5>
                <button className={'button-5 bottom booking'}>{t('book')}</button>
            </div>
        </div>
    );
};

export default Footer;