import styles from "./ConnectBanner.module.css";

import RegButton from "../RegButton/RegButton";

function ConnectBanner() {
  return (
    <div className={styles.banner_container}>
      <h1 className={styles.banner_text}>
        Let’s Build Meaningful Projects Together
      </h1>
      <div className={styles.banner_button_wrapper}>
        <RegButton button_text="Connect With Me" type="primary" onClick="https://www.linkedin.com/in/cesariamonforte/" />
      </div>
    </div>
  );
}

export default ConnectBanner;
