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
            <a href="https://github.com/CesariaMonforte" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <img src="/GitHub.svg" alt="" className={styles.connection} />
            </a>
           
            <a href="https://www.linkedin.com/in/cesariamonforte/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <img src="/LinkedIn.svg" alt="" className={styles.connection} />
            </a>
            <a href="https://www.tiktok.com/@Lifeascesaria" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
              <img src="/TikTok.svg" alt="" className={styles.connection} />
            </a>
          </div>

          <p className={styles.copyright}>All rights reserved © 2024</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
