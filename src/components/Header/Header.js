import React, { useState } from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import MenuIcon from '@mui/icons-material/Menu';
import { useTranslation } from 'react-i18next';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-scroll';

import './Header.css';
import logo from '../../logo.png';
import LangSwitch from '../LangSwitch/LangSwitch';
import { useOutsideClick } from '../../hooks/ckuck-outside';

const Header = () => {
    const { t } = useTranslation();

    const [openMenu, setOpenMenu] = useState(false);
    const [showMenu, setShowMenu] = useState(['menu_wrapper']);

    const closeMenu = () => {
        setOpenMenu(false);
        setShowMenu(['menu_wrapper']);
    };
    const getOpenMenu = () => {
        setOpenMenu(true);
        setShowMenu(['menu_wrapper', 'show_burger_menu']);
    }

    const menuRef = useOutsideClick(closeMenu);

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
                <ul className={showMenu.join(' ')} ref={menuRef}>
                    <li>
                        <Link
                            onClick={closeMenu}
                            className={'nav_link'}
                            to={'top'}
                            smooth={true} spy={false}
                            duration={800}
                            offset={-80}>{t('main')}
                        </Link>
                        <Link
                            onClick={closeMenu}
                            className={'nav_link'}
                            to={'services'}
                            smooth={true} spy={false}
                            duration={800}
                            offset={-80}>{t('services')}
                        </Link>
                        <Link
                            onClick={closeMenu}
                            className={'nav_link'}
                            to={'barbers'}
                            smooth={true} spy={false}
                            duration={800}
                            offset={-80}>{t('barbers')}
                        </Link>
                        <Link
                            onClick={closeMenu}
                            className={'nav_link'}
                            to={'contacts'}
                            smooth={true} spy={false}
                            duration={800}
                            offset={-80}>{t('contacts')}
                        </Link>
                    </li>
                </ul>
            </div>
            <div>
                <div className={'menu_icon'} onClick={getOpenMenu}>
                    <MenuIcon fontSize={'large'} style={{
                        display: !openMenu ? 'block' : 'none',
                        marginRight: '20px',
                        cursor: 'pointer'

                    }}/>
                </div>
                <div className={'menu_icon'} onClick={closeMenu}>
                    <CloseIcon fontSize={'large'}
                               style={{
                                   display: openMenu ? 'block' : 'none',
                                   marginRight: '20px',
                                   cursor: 'pointer'
                               }}
                    />
                </div>
            </div>
        </nav>
    );
};

export default Header;