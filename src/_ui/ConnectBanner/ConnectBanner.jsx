import styles from "./ConnectBanner.module.css";

import RegButton from "../RegButton/RegButton";

function ConnectBanner() {
    return (
        <div className={styles.banner_container}>
            <h1 className={styles.banner_text}>
                Let’s build meaningful work together
            </h1>
            <RegButton button_text="Let's Connect" />
        </div>
    );
}

export default ConnectBanner;
