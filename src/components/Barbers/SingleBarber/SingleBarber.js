import React from 'react';
import { Parser } from 'html-to-react';
import { RiStarSFill } from 'react-icons/ri';

import css from './SingleBarber.module.css';

const SingleBarber = ({ barber }) => {
    return (
        <div className={'card ' + css.barber_card}>
            <div style={{ display: 'flex', flexDirection: 'column', alignContent: 'center' }}>
                <img src={barber.picture} alt={barber.name} loading={'lazy'} className={css.card_picture}/>
                {/*<h3>{barber.name}</h3>*/}
                {/*<p>{barber.description}</p>*/}
                <div style={{ display: 'flex', gap: '10px', margin: '0 auto' }}>
                    <RiStarSFill size={'1.6em'} color={'var(--orange)'}/>
                    <RiStarSFill size={'1.6em'} color={'var(--orange)'}/>
                    <RiStarSFill size={'1.6em'} color={'var(--orange)'}/>
                    <RiStarSFill size={'1.6em'} color={'var(--orange)'}/>
                    <RiStarSFill size={'1.6em'} color={'var(--orange)'}/>
                </div>
                <h2>{barber.name}</h2>
                <h3>{barber.description}</h3>

            </div>
            <div> {Parser().parse(barber.about)}</div>
        </div>

    );
};

export default SingleBarber;