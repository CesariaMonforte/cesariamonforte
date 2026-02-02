import styles from "./PageLoader.module.css";

function PageLoader() {
  return (
    <div className={styles.overlay} aria-hidden="true">
      <div className={styles.diamonds}>
        <div className={styles.diamond_dark} />
        <div className={styles.diamond_light} />
      </div>
    </div>
  );
}

export default PageLoader;
