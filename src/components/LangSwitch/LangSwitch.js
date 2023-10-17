import React, { useState } from 'react';

import './LangSwitch.css';
import { useTranslation } from 'react-i18next';

const LangSwitch = () => {
    const { i18n } = useTranslation();
    const [back, setBack] = useState(false);

    const handleChange = (e) => {
        e.preventDefault();
        changeLanguage(e.target.value);
        setBack(false);
    }

    const handleBlur = () => {
        setBack(false);
    };
    const handleFocus = () => {
        setBack(true);
    };

    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    }
    return (
        <div>
            <select className={back ? 'select_css select_active' : 'select_css'}
                    onChange={handleChange}
                    onBlur={handleBlur} onFocus={handleFocus}
                    defaultValue={i18n.language.toLowerCase()}>
                <option value={'ru'}>RU</option>
                <option value={'ro'}>RO</option>
                <option value={'en'}>EN</option>
            </select>

        </div>
    );
};

export default LangSwitch;