import React, { useContext, useState } from 'react';
import { BookContext } from './BookContext';
import styles from './BookCard.module.css';

const BookCard = ({ book, isInBookshelf }) => {
  const { addToBookshelf } = useContext(BookContext);
  const [addedToBookshelf, setAddedToBookshelf] = useState(false);

  const handleAddToBookshelf = () => {
    addToBookshelf(book);
    setAddedToBookshelf(true);
    // alert('Added to Bookshelf');
  };

  return (
    <div className={styles.card}>
      <img
        src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
        alt={book.title}
      />
      <div>
        <p><b>Book Title: </b>{book.title}</p>
        <p><b>Author: </b> {book.author_name?.[0]}</p>
        <p><b>Publisher: </b> {book.publisher?.[0]}</p>
        <p><b>Published: </b> {book.first_publish_year}</p>
        {!isInBookshelf && !addedToBookshelf && (
          <button onClick={handleAddToBookshelf} className={styles.button}>Add to Bookshelf</button>
        )}
      </div>
    </div>
  );
};

export default BookCard;
