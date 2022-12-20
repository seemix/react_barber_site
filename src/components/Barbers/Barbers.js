import React from 'react';

import './Barbers.css';
import ben from '../../images/team-1.webp';
import nic from '../../images/team-2.webp';

const Barbers = () => {
    return (
        <div className={'barbers'}>
            <div className={'section_caption'}>
                <h3>LevelUP Barbershop</h3>
                <h2>Наши барберы</h2>
                <div className={'heading_line'}></div>
                <div className={'cards_wrapper'}>
                    <div>
                        <img className={'gray_scale'} width={'350px'} src={ben} alt="ben"/>
                        <div className={'team_overlay'}>
                            <h3>Benjamin</h3>
                            <h4>owner</h4>
                        </div>
                    </div>
                    <div>
                        <img className={'gray_scale'} width={'350px'} src={nic} alt="ben"/>
                        <div className={'team_overlay'}>
                            <h3>Nicolae</h3>
                            <h4>junior barber</h4>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Barbers;