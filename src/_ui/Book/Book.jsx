import styles from "./Book.module.css";

function Book() {
  return (
    <div className={styles.book}>
      <div className={styles.spine}>
        <span className={styles.title}>Book title</span>
        <span className={styles.author}>author</span>
      </div>
      <div className={styles.top}></div>
      <div className={styles.cover}></div>
    </div>
  );
}

export default Book;
