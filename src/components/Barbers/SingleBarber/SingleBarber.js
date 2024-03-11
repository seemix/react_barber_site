import React from 'react';
import { motion } from 'framer-motion';

import { blockAnimation } from './animations';
import { animation } from '../../../assets/common';
import css from './SingleBarber.module.css';

const SingleBarber = ({ barber, index }) => {
    return (
        <motion.div className={'card ' + css.barber_card}
                    {...animation}
                    custom={index + 1.2}
                    variants={blockAnimation}
        >
            {/*<div className={css.card_picture}*/}
            {/*     style={{ backgroundImage: `url(${barber.picture})` }}*/}
            {/*/>*/}
            <img src={barber.picture} alt={barber.name} loading={'lazy'} className={css.card_picture}/>
            <div className={css.barber_text}>
                <h3>{barber.name}</h3>
                <h4>{barber.description}</h4>
            </div>
        </motion.div>

    );
};

export default SingleBarber;