import React from 'react';

import logo from '../../images/logo.webp';
import css from './Loader.module.css';
const Loader = () => {
    return (
        <div className={css.loader_container}>
            <img className={css.loader} src={logo} alt={'loader'}/>
        </div>
    );
};

export default Loader;