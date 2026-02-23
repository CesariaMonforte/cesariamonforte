import styles from "./Book.module.css";

function Book({ imgspine, imgcover, onBookClick, title, author, height }) {
  const bookStyle = height ? { height: `${height}px` } : {};
  return (
    <div className={styles.book} onClick={onBookClick}>
      <div className={`${styles.side} ${styles.spine}`} style={bookStyle}>
        <span className={styles.title}>{title}</span>
        <span className={styles.author}>{author}</span>
      </div>
      <div className={`${styles.side} ${styles.top}`}></div>
      <div className={`${styles.side} ${styles.cover}`}></div>
    </div>
  );
}

export default Book;
