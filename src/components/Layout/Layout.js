import React from 'react';
import { Barbers, Contacts, Footer, Header, Main, Services, Slider, TopButton } from '../index';

const Layout = () => {
    return (
        <div id={'top'}>
            <Header/>
            <Slider/>
            <Main/>
            <Services/>
            <Barbers/>
            <Contacts/>
            <Footer/>
            <TopButton/>
        </div>
    );
};

export default Layout;