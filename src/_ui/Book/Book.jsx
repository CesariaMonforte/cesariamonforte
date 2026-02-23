import styles from "./Book.module.css";

function Book() {
  return (
    <div className={styles.book}>
      <div className={styles.spine}></div>
      <div className={styles.top}></div>
      <div className={styles.cover}></div>
    </div>
  );
}

export default Book;
