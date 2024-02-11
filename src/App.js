import React from 'react';

import './App.css';
import { Barbers, Contacts, Footer, Header, Services, Slider, TopButton } from './components';

const App = () => {

    return (
        <div id={'top'}>
            <Header/>
            <Slider/>
            <Services/>
            <Barbers/>
            <Contacts/>
            <Footer/>
            <TopButton/>
        </div>
    );
};

export default App;