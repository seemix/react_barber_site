import { Link } from 'react-scroll';
import { useTranslation } from 'react-i18next';

import { menuItems } from './menuItems.js';
import css from './Menu.module.css';


const Menu = ({ openMenu }) => {
    const { t } = useTranslation();

    return (
        <nav>
            <ul className={openMenu ? css.navigation + ' ' + css.open : css.navigation}>
                {
                    menuItems.map(item => <Link to={item.to}
                                                className={css.nav_link}
                                                smooth={true}
                                                spy={false}
                                                duration={800}
                                                offset={-80}
                                                key={item.id}>
                        <li>{t(`${item.name}`)}</li>
                    </Link>)
                }
            </ul>
        </nav>
    );
};

export default Menu;