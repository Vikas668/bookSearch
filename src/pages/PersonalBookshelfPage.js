import React, { useContext } from 'react';
import { BookContext } from '../components/BookContext';
import BookCard from '../components/BookCard';
import styles from './PersonalBookshelfPage.module.css';

const PersonalBookshelfPage = () => {
  const { books } = useContext(BookContext);

  return (
    <div className={styles.container}>
      <h1>My Bookshelf</h1>
      <div className={styles.bookList}>
        {books.map((book, index) => (
          <BookCard key={index} book={book} isInBookshelf />
        ))}
      </div>
    </div>
  );
};

export default PersonalBookshelfPage;
