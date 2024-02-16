import React from 'react';

import { Barbers, Contacts, Footer, Header, Services, Slider, TopButton } from './components';
import './App.css';

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