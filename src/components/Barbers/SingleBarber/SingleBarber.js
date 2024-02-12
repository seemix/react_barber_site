import React from 'react';
import { motion } from 'framer-motion';

import { blockAnimation } from './animations';
import css from './SingleBarber.module.css';

const SingleBarber = ({ barber, index }) => {
    console.log(barber);
    return (
        <motion.div className={'card ' + css.barber_card}
                    custom={index + 1.5}
                    initial={'hidden'}
                    whileInView={'visible'}
                    variants={blockAnimation}
                    viewport={{ once: true }}
        >
            <div className={css.card_picture}
                 style={{ backgroundImage: `url(${barber.picture})` }}
            />
            <div className={css.barber_text}>
                <h3>{barber.name}</h3>
                <h4>{barber.description}</h4>
            </div>
        </motion.div>

    );
};

export default SingleBarber;