import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer_container}>
      <div className={styles.footer_inner}>
        <div className={styles.footer_left}>
          <img src="/Logo.svg" alt="logo" className={styles.logo} />
        </div>

        <div className={styles.footer_right}>
          <nav className={styles.navLinks}>
            <a href="/">Home</a>
            <a href="/Work">Work</a>
            <a href="/About">About</a>
          </nav>

          <div className={styles.connection_links}>
            <img src="/GitHub.svg" alt="GitHub" className={styles.connection} />
            <img src="/Instagram.svg" alt="Instagram" className={styles.connection} />
            <img src="/LinkedIn.svg" alt="LinkedIn" className={styles.connection} />
            <img src="/TikTok.svg" alt="TikTok" className={styles.connection} />
          </div>

          <p className={styles.copyright}>All rights reserved © 2024</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
