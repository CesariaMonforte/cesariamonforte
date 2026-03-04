import { useState } from "react";
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
  const [rotationX, setRotationX] = useState(0);
  const [rotationY, setRotationY] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [lastMousePosition, setLastMousePosition] = useState({ x: 0, y: 0 });

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
      {type === "full" && (
        <div className={styles.fullBook}>
          <div className={styles.front_full}></div>
          <div className={styles.side_full}></div>
          <div className={styles.back_full}></div>
          <div className={styles.pages_full}></div>
        </div>
      )}
    </>
  );
}

export default Book;
