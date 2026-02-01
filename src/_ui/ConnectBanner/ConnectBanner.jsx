import styles from "./ConnectBanner.module.css";

import RegButton from "../RegButton/RegButton";

function ConnectBanner() {
  return (
    <div className={styles.banner_container}>
      <h1 className={styles.banner_text}>
        Let’s build meaningful work together
      </h1>
      <div className={styles.banner_button_wrapper}>
        <RegButton button_text="Let's Connect" type="primary" />
      </div>
    </div>
  );
}

export default ConnectBanner;
