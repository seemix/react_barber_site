import React from 'react';

import css from './SingleBarber.module.css';

const SingleBarber = ({ barber }) => {
    return (
        <div className={'card ' + css.barber_card} >
            <img src={barber.picture} alt={barber.name} loading={'lazy'} className={css.card_picture}/>
            <div className={css.barber_text}>
                <h3>{barber.name}</h3>
                <h4>{barber.description}</h4>
            </div>
        </div>

    );
};

export default SingleBarber;