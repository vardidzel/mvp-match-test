import logo from '../../assets/images/logo.svg';
import menu from '../../assets/images/menu.svg';
import './Header.scss';
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header className="header">
            <Link to="/" className="header__logo"><img src={logo} alt="Logo"/></Link>
            <div className="container d-flex justify-content-between align-items-center">
                <img src={menu} alt="Menu"/>
                <div className="d-flex align-items-center">
                    <div className="avatar">JD</div>
                    <div className="header__text text-primary">John Doe</div>
                </div>
            </div>
        </header>
    )
}

export default Header;
