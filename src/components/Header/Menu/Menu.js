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
                    menuItems.map(item => <li key={item.id}>
                        <Link
                            to={item.to}
                            className={css.nav_link}
                            smooth={true}
                            spy={false}
                            duration={800}
                            offset={-80}
                            aria-label={item.name}>
                            {t(`${item.name}`)}
                        </Link></li>)
                }
            </ul>
        </nav>
    );
};

export default Menu;