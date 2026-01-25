import styles from "./Footer.module.css";

function Footer({}) {
    return (
        <div className={styles.navbar}>
            <div className={styles.container_logo_connection}>
                <img
                    src='/Logo.svg'
                    alt='logo'
                    className={styles.logo}
                />
                <div className={styles.connection_links}>
                    <img
                        src='/Logo.svg'
                        alt='logo'
                        className={styles.connection}
                    />
                    <img
                        src='/Logo.svg'
                        alt='logo'
                        className={styles.connection}
                    />
                    <img
                        src='/Logo.svg'
                        alt='logo'
                        className={styles.connection}
                    />
                    <img
                        src='/Logo.svg'
                        alt='logo'
                        className={styles.connection}
                    />
                </div>
            </div>

            <div className={styles.navLinks}>
                <a href='/'>Home</a>
                <a href='/'>Work</a>
                <a href='/'>About</a>
                <div>Lets connect</div>
            </div>
        </div>
    );
}
export default Footer;
