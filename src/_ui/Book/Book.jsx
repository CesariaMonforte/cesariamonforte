import styles from "./Book.module.css";

function Book({ imgspine, imgcover, onBookClick, title, author }) {
  return (
    <div className={styles.book} onClick={onBookClick}>
      <div className={`${styles.side} ${styles.spine}`}>
        <span className={styles.title}>{title}</span>
        <span className={styles.author}>{author}</span>
      </div>
      <div className={`${styles.side} ${styles.top}`}></div>
      <div className={`${styles.side} ${styles.cover}`}></div>
    </div>
  );
}

export default Book;
