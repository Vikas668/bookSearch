import React from 'react';
import styles from './BookCard.module.css'; // Import CSS styles

const BookCard = ({ book, onAddToBookshelf }) => {
  const handleAddToBookshelf = () => {
    if (onAddToBookshelf) {
      onAddToBookshelf(book);
    }
  };

  return (
    <div className={styles.card}>
      <img
        src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
        alt={book.title}
      />
      <h3>{book.title}</h3>
      <p>Author: {book.author_name?.[0]}</p>
      <p>Publisher: {book.publisher?.[0]}</p>
      <p>Published: {book.first_publish_year}</p>
      <button onClick={handleAddToBookshelf}>Add to Bookshelf</button>
    </div>
  );
};

export default BookCard;
