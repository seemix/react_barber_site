import React from 'react';
import ScrollToTop from 'react-scroll-to-top';

import './App.css';
import { Barbers, Contacts, Footer, Header, Services, Slider } from './components';

const App = () => {

    return (
        <div id={'top'}>
            <Header/>
            <Slider/>
            <Services/>
            <Barbers/>
            <Contacts/>
            <Footer/>
            <ScrollToTop className={'top_scroll'} component={'↑'} smooth />
        </div>
    );
};

export default App;