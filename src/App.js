import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import BookSearchPage from './pages/BookSearchPage';
import PersonalBookshelfPage from './pages/PersonalBookshelfPage';
import { BookProvider } from './components/BookContext';

function App() {
  return (
    <Router>
      <BookProvider>
        <Switch>
          <Route path="/" exact component={BookSearchPage} />
          <Route path="/bookshelf" component={PersonalBookshelfPage} />
        </Switch>
      </BookProvider>
    </Router>
  );
}

export default App;
