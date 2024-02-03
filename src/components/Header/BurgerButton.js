import React from 'react';

import './BurgerButton.css';

const BurgerButton = () => {
    return (
        <div>
            <label className="hamburger-menu">
                <div className="top"></div>
                <div className="center"></div>
                <div className="bottom"></div>
                {/*<input type="checkbox"/>*/}
            </label>
        </div>
    );
};

export default BurgerButton;