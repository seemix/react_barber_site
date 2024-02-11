import React from 'react';

import css from './Services.module.css';
import { SectionHeader, SingleServiceCard } from '../index';
import { servicesData } from './servicesData';

const Services = () => {
    return (
        <section id={'services'}>
            <SectionHeader caption={'ourServices'}/>
            <div className={css.cards_wrapper}>
                {
                    servicesData.map(item => <SingleServiceCard
                        key={item.id}
                        id={item.id}
                        icon={item.icon}
                        services={item.services}/>)
                }
            </div>
        </section>
    );
};

export default Services;