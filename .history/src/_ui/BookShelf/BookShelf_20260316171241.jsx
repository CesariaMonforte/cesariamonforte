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
                        type='shelf'
                    />
                ))}
            </div>
            <div className={styles.shelf}></div>

            {selectedBook && (
                <PopUp onClose={handleClosePopUp}>
                    <div className={styles.bookDetails}>
                        <div className={styles.bookHeader}>
                            <h2 className={styles.bookTitle}>
                                {selectedBook.title}
                            </h2>
                            <p className={styles.bookAuthor}>
                                {selectedBook.author}
                            </p>
                            <p className={styles.bookInstructions}>
                                Click and drag to rotate the book
                            </p>
                            <div className={styles.book3D}>
                                <Book
                                    type='full'
                                    height={selectedBook.height}
                                />
                            </div>
                        </div>
                        <div className={styles.bookDescription}>
                            <div className={styles.bookSubsection}>
                                <h3 className={styles.bookSubsectionTitle}>
                                    Genre
                                </h3>
                                <p className={styles.bookSubsectionContent}>
                                    {selectedBook.genre}
                                </p>
                            </div>
                            <div className={styles.bookSubsection}>
                                <h3 className={styles.bookSubsectionTitle}>
                                    Status
                                </h3>
                                <p className={styles.bookSubsectionContent}>
                                    {selectedBook.status}
                                </p>
                            </div>
                            <div className={styles.bookSubsection}>
                                <h3 className={styles.bookSubsectionTitle}>
                                    Short Description
                                </h3>
                                <p className={styles.bookSubsectionContent}>
                                    {selectedBook.description}
                                </p>
                            </div>
                            <div className={styles.bookSubsection}>
                                <h3 className={styles.bookSubsectionTitle}>
                                    Why I read it / Want to read it
                                </h3>
                                <p className={styles.bookSubsectionContent}>
                                    {selectedBook.readreason}
                                </p>
                            </div>
                        </div>
                    </div>
                </PopUp>
            )}
        </div>
    );
}

export default BookShelf;
