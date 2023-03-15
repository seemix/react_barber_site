import React, { useState } from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import MenuIcon from '@mui/icons-material/Menu';
import { useTranslation } from 'react-i18next';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-scroll';

import './Header.css';
import logo from '../../logo.png';
import LangSwitch from '../LangSwitch/LangSwitch';

const Header = () => {
    const { t } = useTranslation();

    const [openMenu, setOpenMenu] = useState(false);
    const [showMenu, setShowMenu] = useState(['menu_wrapper']);

    const handleMenuButton = () => {
        if (openMenu) {
            setOpenMenu(false);
            setShowMenu(['menu_wrapper']);
        } else {
            setOpenMenu(true);
            setShowMenu(['menu_wrapper', 'show_burger_menu']);
        }
    }

    return (
        <nav className={'navbar_items'} id={'menu'}>
            <h1>
                <img className={'main_logo'} src={logo} alt="logo"/>
            </h1>
            <div className={'insta_icon'}>
                <a target="_blank" rel="noreferrer" href="https://www.instagram.com/lvlup_barbershop/"
                   style={{ color: 'whitesmoke', textDecoration: 'none' }}>
                    <InstagramIcon fontSize={'large'}/>
                </a>
            </div>
            <LangSwitch/>
            <div className={'navigation'}>
                <ul className={showMenu.join(' ')}>
                    <li>
                        <Link
                            onClick={handleMenuButton}
                            className={'navLink'}
                            to={'top'}
                            smooth={true} spy={false}
                            duration={800}
                            offset={-90}>{t('main')}
                        </Link>
                        <Link
                            onClick={handleMenuButton}
                            className={'navLink'}
                            to={'services'}
                            smooth={true} spy={false}
                            duration={800}
                            offset={-90}>{t('services')}
                        </Link>
                        <Link
                            onClick={handleMenuButton}
                            className={'navLink'}
                            to={'barbers'}
                            smooth={true} spy={false}
                            duration={800}
                            offset={-90}>{t('barbers')}
                        </Link>
                        <Link
                            onClick={handleMenuButton}
                            className={'navLink'}
                            to={'contacts'}
                            smooth={true} spy={false}
                            duration={800}
                            offset={-90}>{t('contacts')}
                        </Link>

                    </li>
                </ul>
            </div>
            <div>
                <div className={'menu_icon'} onClick={handleMenuButton}>
                    <MenuIcon fontSize={'large'} style={{
                        display: !openMenu ? 'block' : 'none',
                        position: 'absolute',
                        top: 30,
                        right: 30
                    }}/>
                </div>
                <div className={'menu_icon'} onClick={handleMenuButton}>
                    <CloseIcon fontSize={'large'}
                               style={{
                                   display: openMenu ? 'block' : 'none',
                                   position: 'absolute',
                                   top: 30,
                                   right: 30
                               }}
                    />
                </div>
            </div>
        </nav>
    );
};

export default Header;