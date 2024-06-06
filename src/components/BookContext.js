import React, { createContext, useState } from 'react';

const BookContext = createContext();

const BookProvider = ({ children }) => {
  const [books, setBooks] = useState([]);

  const addToBookshelf = (book) => {
    setBooks([...books, book]);
  };

  return (
    <BookContext.Provider value={{ books, addToBookshelf }}>
      {children}
    </BookContext.Provider>
  );
};

export { BookContext, BookProvider };
