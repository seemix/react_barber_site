import React from 'react';
import { BookingButton, WelcomeHeader } from '../index';
import css from './Main.module.css';

const Main = ({loading}) => {
    return (
        <div className={css.overlay}>
            <div className={css.slider_welcome}>
                {!loading && <><WelcomeHeader/><BookingButton/></>}
            </div>
         </div>
    )
        ;
};

export default Main;