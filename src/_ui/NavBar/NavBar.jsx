import styles from "./NavBar.module.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import RegButton from "../RegButton/RegButton";
import LinkButton from "../LinkButton/LinkButton";

function NavBar({}) {
  const navigate = useNavigate();
  return (
    <div className={styles.navbar}>
      <div onClick={() => navigate("/")}>
        <img src="/Logo.svg" alt="logo" className={styles.logo} />
      </div>

      <div className={styles.navLinks}>
        <LinkButton button_text="Home" type="regular" onclick={"/"} />
        <LinkButton button_text="Work" type="regular" onclick={"/Work"} />
        <LinkButton button_text="About" type="regular" onclick={"/About"} />
        <div className={styles.navCtaWrap}>
          <RegButton button_text={"Let's Connect"} type={"primary"} onClick={"https://www.linkedin.com/in/cesariamonforte/"} />
        </div>
      </div>
    </div>
  );
}
export default NavBar;
