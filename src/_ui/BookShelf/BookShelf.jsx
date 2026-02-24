import { useState } from "react";
import styles from "./BookShelf.module.css";
import Book from "../Book/Book";
import PopUp from "../PopUp/PopUp";
import _bookData from "../../_bookData/_bookData.json";

function BookShelf() {
  const [selectedBook, setSelectedBook] = useState(null);

  const handleBookClick = (book) => {
    setSelectedBook(book);
  };

  const handleClosePopUp = () => {
    setSelectedBook(null);
  };

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
            onBookClick={() => handleBookClick(book)}
          />
        ))}
      </div>
      <div className={styles.shelf}></div>

      {selectedBook && (
        <PopUp onClose={handleClosePopUp}>
          <div className={styles.bookDetails}>
            <h2>{selectedBook.title}</h2>
            <p>{selectedBook.author}</p>
          </div>
        </PopUp>
      )}
    </div>
  );
}

export default BookShelf;
