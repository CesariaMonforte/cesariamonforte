import styles from "./Book.module.css";

function Book({
  imgspine,
  imgcover,
  onBookClick,
  title,
  author,
  height,
  type,
}) {
  const bookStyle = height ? { height: `${height}px` } : {};
  return (
    <>
      {type === "shelf" && (
        <div className={styles.book} onClick={onBookClick}>
          <div className={`${styles.side} ${styles.spine}`} style={bookStyle}>
            <span className={styles.title}>{title}</span>
            <span className={styles.author}>{author}</span>
          </div>
          <div className={`${styles.side} ${styles.top}`}></div>
          <div className={`${styles.side} ${styles.cover}`}></div>
        </div>
      )}
      {type === "full" && <div></div>}
    </>
  );
}

export default Book;
