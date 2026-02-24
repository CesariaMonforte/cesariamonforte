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
            <div className={styles.bookHeader}>
              <h2 className={styles.bookTitle}>{selectedBook.title}</h2>
              <p className={styles.bookAuthor}>{selectedBook.author}</p>
              <div className={styles.book3D}>3D Interactive Book</div>
            </div>
            <div className={styles.bookDescription}>
              <div>
                <h3>Genre</h3>
                <p>{selectedBook.genre}</p>
              </div>
              <div>
                <h3>Status</h3>
                <p>{selectedBook.status}</p>
              </div>
              <div>
                <h3>Short Description</h3>
                <p>{selectedBook.description}</p>
              </div>
              <div>
                <h3>Why i read it/ want to read it</h3>
                <p>{selectedBook.readreason}</p>
              </div>
            </div>
          </div>
        </PopUp>
      )}
    </div>
  );
}

export default BookShelf;
