import css from './BurgerButton.module.css';
const MenuButton = ({ openMenu }) => {
    return (
        <div className={css.button_wrapper}>
            <label className={css.hamburger_menu}>
                <div className={openMenu ? css.top_bar + ' ' + css.open : css.top_bar}></div>
                <div className={openMenu ? css.center_bar + ' ' + css.open : css.center_bar}></div>
                <div className={openMenu ? css.bottom_bar + ' ' + css.open : css.center_bar}></div>
            </label>
        </div>
    );
};

export default MenuButton;