import styles from "./BookShelf.module.css";
import Book from "../Book/Book";

function BookShelf() {
  return (
    <div className={styles.bookshelf}>
      <div className={styles.shelf}>
        <Book title={"The Design of Everyday Things"} author={"Don Norman"} />
      </div>
    </div>
  );
}

export default BookShelf;
