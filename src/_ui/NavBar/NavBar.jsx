import styles from "./NavBar.module.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import RegButton from "../RegButton/RegButton";
import LinkButton from "../LinkButton/LinkButton";

function NavBar() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMenuOpen]);

  return (
    <div className={styles.navbar}>
      <div className={styles.logo_container} onClick={() => { navigate("/"); closeMenu(); }}>
        <img src="/Logo.svg" alt="logo" className={styles.logo} />
        <h2 className={styles.logo_text}>Cesaria Monforte</h2>
      </div>

      <button
        type="button"
        className={styles.hamburger}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
        aria-expanded={isMenuOpen}
      >
        <span className={styles.hamburger_line} />
        <span className={styles.hamburger_line} />
        <span className={styles.hamburger_line} />
      </button>

      <div className={`${styles.navLinks} ${isMenuOpen ? styles.navLinks_open : ""}`}>
        <LinkButton button_text="Home" type="regular" onclick="/" onClick={closeMenu} />
        <LinkButton button_text="Work" type="regular" onclick="/Work" onClick={closeMenu} />
        <LinkButton button_text="About" type="regular" onclick="/About" onClick={closeMenu} />
        <div className={styles.navCtaWrap} onClick={closeMenu}>
          <RegButton button_text="Let's Connect" type="primary" onclick="https://www.linkedin.com/in/cesariamonforte/" />
        </div>
      </div>

      {isMenuOpen && (
        <div
          className={styles.menu_overlay}
          onClick={closeMenu}
          onKeyDown={(e) => e.key === "Escape" && closeMenu()}
          role="button"
          tabIndex={0}
          aria-label="Close menu"
        />
      )}
    </div>
  );
}
export default NavBar;
