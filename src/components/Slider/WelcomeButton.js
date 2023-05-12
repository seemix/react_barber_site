import React from 'react';
import './Slider.css';
import { useTranslation } from 'react-i18next';

const WelcomeButton = () => {
    const { t } = useTranslation();
    return (
        <div>
            <div className={'overlay'}>
                <div className={'slider_welcome'}>
                    <h1>{t('welcome')} LevelUP Barbershop</h1>
                    <div>
                        <button className={'button-5 booking'}>{t('book')}</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WelcomeButton;