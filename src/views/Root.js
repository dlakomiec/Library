import React, { useState } from 'react';
import { books as booksData } from 'data/books';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';
import LoginSite from 'components/templates/LoginSite/LoginSite';
import BooksList from 'components/organisms/BooksList/BooksList';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Form from 'components/organisms/Form/Form';

const Root = () => {
  const [books, setBooks] = useState(booksData);
  const [formValues, setFormValues] = useState({
    title: '',
    author: '',
    genre: '',
  });

  const deleteBook = (title) => {
    const filtredBooks = books.filter((book) => book.title !== title);
    setBooks(filtredBooks);
  };

  const handleInputChange = (e) => {
    console.log(formValues);

    setFormValues({
      ...formValues,
      [e.target.title]: e.target.value,
    });
  };

  const handleAddBook = (e) => {
    e.preventDefault();
    if (formValues.title && formValues.author && formValues.genre) {
      const newBook = {
        title: formValues.title,
        author: formValues.author,
        genre: formValues.genre,
      };

      setBooks([newBook, ...books]);
    } else {
      alert(`Wszystkie pola muszą być wypełnione`);
    }
    setFormValues({
      title: '',
      author: '',
      genre: '',
    });
  };
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <nav>
          <Link to="/">Logownaie </Link>
          <Link to="/bookList">Lista ksiazek </Link>
          <Link to="/form">Dodaj ksazke </Link>
        </nav>
        <Switch>
          <Route exact path="/">
            <LoginSite />
          </Route>
          <Route path="/bookList">
            <BooksList deleteBook={deleteBook} books={books} />
          </Route>

          <Route path="/form">
            <Form
              formValues={formValues}
              handleAddBook={handleAddBook}
              handleInputChange={handleInputChange}
            />
          </Route>
        </Switch>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default Root;
