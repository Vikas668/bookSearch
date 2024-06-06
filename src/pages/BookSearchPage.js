import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BookCard from '../components/BookCard';
import { searchBooks } from '../utils/api';
import styles from './BookSearchPage.module.css'; // Import CSS styles

const BookSearchPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();

  const handleSearch = async (event) => {
    setSearchTerm(event.target.value);
    const bookResults = await searchBooks(event.target.value);
    setBooks(bookResults);
  };

  const navigateToBookshelf = () => {
    navigate('/bookshelf');
  };

  return (
    <div className={styles.container}>
      <h1>Book Search</h1>
      <input
        type="text"
        placeholder="Search for a book"
        value={searchTerm}
        onChange={handleSearch}
        className={styles.searchInput} // Add className for styling
      />
      <div className={styles.bookList}>
        {books.map((book) => (
          <BookCard key={book.key} book={book} />
        ))}
      </div>
      <button onClick={navigateToBookshelf}>View Bookshelf</button>
    </div>
  );
};

export default BookSearchPage;
