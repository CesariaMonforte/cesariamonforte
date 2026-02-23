import styles from "./BookShelf.module.css";
import Book from "../Book/Book";
import _bookData from "../../_bookData/_bookData.json";

function BookShelf() {
  return (
    <div className={styles.bookshelf}>
      <div className={styles.shelf}>
        {_bookData.map((book, index) => (
          <Book
            key={index}
            title={book.title}
            author={book.author}
            imgspine={book.imgspine}
            imgcover={book.imgcover}
            height={book.height}
          />
        ))}
      </div>
      <div className={styles.shelf}></div>
    </div>
  );
}

export default BookShelf;
