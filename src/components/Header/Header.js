import React, { useEffect, useState } from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-scroll';

import logo from '../../images/logo.png';
import LangSwitch from '../LangSwitch/LangSwitch';
import { useOutsideClick } from '../../hooks/click-outside';
import './Header.css';
import './BurgerButton.css';

const Header = () => {
    const { t } = useTranslation();

    const [openMenu, setOpenMenu] = useState();
    const [showMenu, setShowMenu] = useState(['menu_wrapper', 'hide_burger_menu']);
    const [scroll, setScroll] = useState(false);
    console.log(openMenu);

    const closeMenu = () => {
        setShowMenu(['menu_wrapper', 'hide_burger_menu']);
        setOpenMenu(false);
    };

    const handleBurger = () => {
        if (!openMenu) {
            setShowMenu(['menu_wrapper', 'show_burger_menu'])
        } else {
            setShowMenu(['menu_wrapper', 'hide_burger_menu'])
        }
        setOpenMenu(!openMenu);
    }

   // const menuRef = useOutsideClick(closeMenu);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 80) setScroll(true);
            else setScroll(false);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <nav className={scroll ? 'navbar_items navbar_scroll' : 'navbar_items'} id={'menu'}>
            <h1>
                <img className={'main_logo'} src={logo} alt="logo"/>
            </h1>
            <div style={{ display: 'flex', gap: '20px' }}>
                <div className={'insta_icon'}>
                    <a target="_blank" rel="noreferrer" href="https://www.instagram.com/lvlup_barbershop/"
                       style={{ color: 'whitesmoke', textDecoration: 'none' }}>
                        <InstagramIcon fontSize={'large'}/>
                    </a>
                </div>
                <div><LangSwitch/></div>
            </div>
            <div className={'navigation'}>
                <ul className={showMenu.join(' ')}>
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
                <div className={'menu_icon'} onClick={handleBurger}>
                    <label className={'hamburger_menu'}>
                        <div className={!openMenu ? 'topBar' : 'topBar open'}></div>
                        <div className={!openMenu ? 'centerBar' : 'centerBar open'}></div>
                        <div className={!openMenu ? 'bottomBar' : 'bottomBar open'}></div>
                    </label></div>
            </div>
        </nav>
    );
};

export default Header;