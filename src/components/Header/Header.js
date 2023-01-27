import React, { useState } from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

import './Header.css';
import { Link } from 'react-scroll';
import { menuItems } from './MenuItems';
import logo from '../../logo.png';

const Header = () => {
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
                <a target="_blank" href="https://www.instagram.com/lvlup_barbershop/"
                   style={{ color: 'whitesmoke', textDecoration: 'none' }}>
                    <InstagramIcon fontSize={'large'}/>
                </a>
            </div>
            <div className={'navigation'}>
                <ul className={showMenu.join(' ')}>
                    {
                        menuItems.map((item, index) => {
                            return (
                                <li>
                                    <Link
                                        onClick={handleMenuButton}
                                        className={item.cls} key={index}
                                        to={item.link}
                                        smooth={true} spy={false}
                                        duration={800}
                                        offset={-90}>{item.title}
                                    </Link>
                                </li>
                            )
                        })
                    }
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