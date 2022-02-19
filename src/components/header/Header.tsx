import logo from '../../assets/images/logo.svg';
import styles from './Header.module.scss';

const Header = () => {
    console.log(styles);
    return (
        <header className={styles.header}>
            <img src={logo} alt="Logo"/>
        </header>
    )
}

export default Header;
