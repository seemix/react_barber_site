import React from 'react';

import './LangSwitch.css';
import { useTranslation } from 'react-i18next';

const LangSwitch = () => {
    const { i18n } = useTranslation();
    const handleChange = (e) => {
        e.preventDefault();
        changeLanguage(e.target.value);
    }
    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    }
    return (
        <div>
            <select className="select-css" onChange={handleChange}>
                <option value={'ru'}>RU</option>
                <option value={'ro'}>RO</option>
                <option value={'en'}>EN</option>
            </select>

        </div>
    );
};

export default LangSwitch;