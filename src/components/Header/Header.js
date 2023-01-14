import React, {useState} from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

import './Header.css';
import {Link} from "react-scroll";
import {menuItems} from './MenuItems';
import logo from '../../logo.png';
import smallLogo from '../../images/logo_small.png';

const Header = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const [showMenu, setShowMenu] = useState(['menu_wrapper']);
    const [navBack, setNavBack] = useState(false);
    const changeNavBack = () => {
        if (window.scrollY > 100) {
            setNavBack(true);
        } else setNavBack(false);
    }
    const handleMenuButton = () => {
        if (openMenu) {
            setOpenMenu(false);
            setShowMenu(['menu_wrapper']);
        } else {
            setOpenMenu(true);
            setShowMenu(['menu_wrapper', 'showMenu']);
        }
    }
    window.addEventListener('scroll', changeNavBack);
    return (
        <nav style={openMenu ? {height: 'auto'} : {}} className={
            navBack ? 'navbar_items navbar_items_scroll' : 'navbar_items'} id={'menu'}>
            <h1 className={openMenu ? 'hide_element' : 'show_element'}>
                <img className={'main_logo'} src={logo} alt="logo"/>
            </h1>
            <img src={smallLogo} alt="logo"
                 className={openMenu ? 'small_logo show_element' : 'small_logo hide_element'}/>
            <div className={'insta_icon'}>
                <a target="_blank" href="https://www.instagram.com/lvlup_barbershop/"
                   style={{color: 'whitesmoke', textDecoration: 'none'}}>
                    <InstagramIcon className={openMenu ? 'hide_element' : 'show_element'} fontSize={'large'}/>
                </a>
            </div>
            <div className={'navigation'}>
                <ul className={showMenu.join(' ')}>
                    {
                        menuItems.map((item, index) => {
                            return (
                                <li>
                                    <Link className={item.cls} activeClass={'nav_link_active'} key={index}
                                          to={item.link}
                                          smooth={true} spy={false}
                                          duration={800}
                                          offset={openMenu ? menuItems.length * -35 - 90 : -90}>{item.title}
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
            <div className={'menu_icon'} onClick={handleMenuButton}>
                <MenuIcon fontSize={'large'} style={{display: !openMenu ? "block" : "none"}}/>
            </div>
            <div className={'menu_icon'} onClick={handleMenuButton}>
                <CloseIcon fontSize={'large'}
                           style={{display: openMenu ? "block" : "none", position: "absolute", top: 30, right: 30}}/>
            </div>
        </nav>
    );
};

export default Header;