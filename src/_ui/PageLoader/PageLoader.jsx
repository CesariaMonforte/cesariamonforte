import styles from "./PageLoader.module.css";

function PageLoader() {
  return (
    <div className={styles.overlay} aria-hidden="true">
      <p className={styles.loading_text}>This page is Loading...</p>
      <div className={styles.diamonds}>
        <div className={styles.diamond_dark} />
        <div className={styles.diamond_light} />
      </div>
    </div>
  );
}

export default PageLoader;
