import './../../App.scss';
import HeaderMenu from '../HeaderMenu/HeaderMenu';
import { useContext } from 'react';
import { ThemeContext } from '../../context/themeContext';
import { useTranslation } from "react-i18next";

const Header = () => {
    //Contexto ThemeContext
    const { darkTheme, setDarkTheme } = useContext(ThemeContext);
    const [t, i18n] = useTranslation("global");

    return (
        <div className='header'>
            <HeaderMenu />
            <div className="menu-icon">
                <button
                    onClick={() => setDarkTheme(!darkTheme)}
                >{darkTheme ? "Light" : "Dark"}</button>
                <button onClick={() => i18n.changeLanguage(i18n.language === "es" ? "en" : "es")}>{i18n.language === "es" ? "EN" : "ES"}</button>
            </div>
        </div>
    )
}

export default Header;  