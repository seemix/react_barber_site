import React from 'react';
import Header from "./components/Header/Header";
import ScrollToTop from "react-scroll-to-top";

import './App.css';
import Slider from "./components/Slider/Slider";
import Services from "./components/Services/Services";
import Barbers from "./components/Barbers/Barbers";
import Contacts from "./components/Contacts/Contacts"
import Footer from "./components/Footer/Footer";

const App = () => {
    return (
        <div id={'top'}>
            <Header/>
            <Slider/>
            <Services/>
            <Barbers/>
            <Contacts/>
            <Footer/>
            <ScrollToTop component={'↑'} style={{backgroundColor: '#9e8a78', color: 'whitesmoke', fontSize: '20px'}} smooth/>
        </div>
    );
};

export default App;