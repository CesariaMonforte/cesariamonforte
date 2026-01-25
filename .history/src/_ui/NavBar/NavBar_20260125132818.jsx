import styles from "./NavBar.module.css";

import RegButton from "../RegButton/RegButton";

function NavBar({}) {
    return (
        <div className={styles.navbar}>
            <div>
                <img
                    src='/Logo.svg'
                    alt='logo'
                    className={styles.logo}
                />
            </div>

            <div className={styles.navLinks}>
                <a href='/'>Home</a>
                <a href='/'>Work</a>
                <a href='/'>About</a>
                <RegButton />
            </div>
        </div>
    );
}
export default NavBar;
