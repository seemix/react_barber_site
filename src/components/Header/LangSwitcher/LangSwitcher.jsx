import { useTranslation } from 'react-i18next';
import i18n from 'i18next';

import { languages } from '../../../assets';
import css from './LangSwitcher.module.css';

const LangSwitcher = ({ scroll }) => {
    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang).then();
    }
    const { t } = useTranslation();

    return (
        <div className={css.menu_wrapper}>
            <ul>
                <li>
                    <span className={css.menu_parent}>{t('lang')}<i className={css.arrow_right}></i></span>
                    <ul>
                        {
                            languages.languages.filter(item => item !== i18n.language.toUpperCase()).map(item =>
                                <li className={scroll ? css.scroll_background : ''} key={item}>
                                    <span onClick={() => changeLanguage(item)}>{item}</span>
                                </li>)
                        }
                    </ul>
                </li>
            </ul>
        </div>
    );
};

export default LangSwitcher;