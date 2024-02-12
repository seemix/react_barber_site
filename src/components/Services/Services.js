import React from 'react';

import { SectionHeader, SingleServiceCard } from '../index';
import { servicesData } from './servicesData';

const Services = () => {
    return (
        <section id={'services'}>
            <SectionHeader caption={'ourServices'}/>
            <div className={'cards_wrapper'}>
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