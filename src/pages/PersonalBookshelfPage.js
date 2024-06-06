import React, { useState, useEffect } from 'react';
import BookCard from '../components/BookCard';
import styles from './PersonalBookshelfPage.module.css'; // Import CSS styles

const PersonalBookshelfPage = () => {
  const [bookshelf, setBookshelf] = useState([]);

  useEffect(() => {
    const storedBookshelf = localStorage.getItem('bookshelf');
    if (storedBookshelf) {
      setBookshelf(JSON.parse(storedBookshelf));
    }
  }, []);

  const addToBookshelf = (book) => {
    const updatedBookshelf = [...bookshelf, book];
    setBookshelf(updatedBookshelf);
    localStorage.setItem('bookshelf', JSON.stringify(updatedBookshelf));
  };

  return (
    <div className={styles.container}>
      <h1>My Bookshelf</h1>
      <div className={styles.bookList}>
        {bookshelf.map((book) => (
          <BookCard key={book.key} book={book} onAddToBookshelf={addToBookshelf} />
        ))}
      </div>
    </div>
  );
};

export default PersonalBookshelfPage;
