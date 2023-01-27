import React from 'react';
import './Slider.css';

const Slider = () => {
    return (
        <div>
            <div className='overlay_container'>
                <div className='pic' id='pic1'/>
                <div className='pic' id='pic2'/>
                <div className='pic' id='pic3'/>
                <div className='pic' id='pic4'/>
                <div className={'overlay'}>
                    <div className={'slider_welcome'}>
                        <h1>Welcome to LevelUP Barbershop</h1>
                        <div>
                            <button className={'button-5 booking'}>ЗАПИСАТЬСЯ</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slider;