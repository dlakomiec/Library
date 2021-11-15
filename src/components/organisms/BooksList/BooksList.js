import React, { useState } from 'react';
import BooksListItem from '../../molecules/BooksListItem/BooksListItem';
import { books as booksData } from 'data/books';
import { BooksWrapper } from './BooksList.styles';
import FormField from 'components/molecules/FormField/FormField';
import AddBookButton from 'components/atoms/AddBookButton/AddBookButton';
import styled from 'styled-components';

const FormWrapper = styled.div``;

const BooksList = () => {
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
    const newBook = {
      title: formValues.title,
      author: formValues.author,
      genre: formValues.genre,
    };
    setBooks([newBook, ...books]);
    setFormValues({
      title: '',
      author: '',
      genre: '',
    });
  };

  return (
    <>
      <BooksWrapper>
        <FormWrapper as="form" onSubmit={handleAddBook}>
          <h2>Dodaj ksiązkę </h2>
          <FormField
            label="Tytul"
            id="title"
            title="title"
            value={formValues.title}
            onChange={handleInputChange}
          />
          <FormField
            label="Autor"
            id="author"
            title="author"
            value={formValues.author}
            onChange={handleInputChange}
          />
          <FormField
            label="Kategoria"
            id="genre"
            title="genre"
            value={formValues.genre}
            onChange={handleInputChange}
          />
          <AddBookButton type="submite" />
        </FormWrapper>
        <ul>
          {books.map((bookData) => (
            <BooksListItem deleteBook={deleteBook} bookData={bookData} />
          ))}
        </ul>
      </BooksWrapper>
    </>
  );
};

export default BooksList;
