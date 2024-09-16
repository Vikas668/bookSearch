import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'; // Import useHistory hook
import BookCard from '../components/BookCard';
import { searchBooks } from '../utils/api';
import styles from './BookSearchPage.module.css'; // Import CSS styles

const BookSearchPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [books, setBooks] = useState([]);
  const history = useHistory(); // there is too traffic
//late
  const handleSearch = async (event) => {
    setSearchTerm(event.target.value);
    const bookResults = await searchBooks(event.target.value);
    setBooks(bookResults);
  };

  const navigateToBookshelf = () => {
    history.push('/bookshelf'); // Use history.push for navigation
  };

  return (
    <div className={styles.container}>
      <h1>Search By BookName</h1>
      <input
        type="text"
        placeholder="Search for a book"
        value={searchTerm}
        onChange={handleSearch}
        className={styles.searchInput} // Add className for styling
      />
       <button onClick={navigateToBookshelf} className={styles.but}>View Bookshelf</button>
      <div className={styles.bookList}>
        {books.map((book) => (
          <BookCard key={book.key} book={book} />
        ))}
      </div>
     
    </div>
  );
};

export default BookSearchPage;
