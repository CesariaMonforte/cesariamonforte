import styles from "./NavBar.module.css";

import RegButton from "../RegButton/RegButton";
import LinkButton from "../LinkButton/LinkButton";

function NavBar({}) {
  return (
    <div className={styles.navbar}>
      <div>
        <img src="/Logo.svg" alt="logo" className={styles.logo} />
      </div>

      <div className={styles.navLinks}>
        <LinkButton button_text="Home" type="regular" onclick={"/"} />
        <LinkButton button_text="Work" type="regular" onclick={"/Work"} />
        <LinkButton button_text="About" type="regular" onclick={"/About"} />

        <RegButton button_text={"Let's Connect"} type={"primary"} />
      </div>
    </div>
  );
}
export default NavBar;
