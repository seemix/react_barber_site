import React from 'react';

import css from './Loader.module.css';

const Loader = ({ dark }) => {
    return (
        <div className={css.loader_container}>
            <div className={dark ? `${css.loader_spin} ${css.loader_spin_dark}` : css.loader_spin}></div>
            <div className={dark ? `${css.loader} ${css.loader_dark}` : css.loader}></div>
        </div>
    );
};

export default Loader;