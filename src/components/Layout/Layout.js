import React from 'react';
import { useQuery } from '@apollo/client';

import { ALL_SLIDES, slideMapper } from '../Slider/query';
import { Barbers, Contacts, Footer, Header, Main, Services, Slider, TopButton } from '../index';

const Layout = () => {
    const { data, loading } = useQuery(ALL_SLIDES);

    let slides;
    if (data) slides = slideMapper(data);
    return (
        <div id={'top'}>
            <Header/>
            <Slider slides={slides}/>
            <Main loading={loading}/>
            <Services/>
            <Barbers/>
            <Contacts/>
            <Footer/>
            <TopButton/>
        </div>
    );
};

export default Layout;