import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useQuery } from '@apollo/client';
import { Parser } from 'html-to-react';

import { SectionHeader } from '../index';
import { ABOUT_US, aboutMapper } from './query';
import { animation } from '../../assets/common';
import { blockAnimation } from '../Barbers/animations';
import css from './About.module.css';

const About = () => {
    const { i18n } = useTranslation();
    const { data, loading } = useQuery(ABOUT_US(i18n.language));
    let about;
    if (data) about = aboutMapper(data);
    return (
        <section id={'about'}>
            <SectionHeader caption={'about'}/>
            {!loading &&
                <motion.div {...animation}
                            custom={1}
                            variants={blockAnimation}
                            className={'card ' + css.about_card}>
                    {Parser().parse(about)}
                </motion.div>
            }
        </section>

    )
};

export default About;