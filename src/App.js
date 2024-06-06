import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BookSearchPage from './pages/BookSearchPage';
import PersonalBookshelfPage from './pages/PersonalBookshelfPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<BookSearchPage />} />
          <Route path="/bookshelf" element={<PersonalBookshelfPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
