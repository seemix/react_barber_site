import React from 'react';
import { Parser } from 'html-to-react';

import css from './SingleBarber.module.css';

const SingleBarber = ({ barber }) => {
    return (
        <div className={'card ' + css.barber_card}>
            <img src={barber.picture} alt={barber.name} loading={'lazy'} className={css.card_picture}/>
            <h2>{barber.name}</h2>
            <h3>{barber.description}</h3>
            <div> {Parser().parse(barber.about)}</div>
        </div>

    );
};

export default SingleBarber;