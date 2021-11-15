import React, { useState } from 'react';
import styled from 'styled-components';
import BooksListItem from '../BooksListItem/BooksListItem';
import { books as booksData } from 'data/books';

const BooksWrapper = styled.div`
  position: absolute;
  right: 0;
  height: 100vh;
  width: 50%;
  background-color: #eff2f1;
  overflow-y: scroll;
`;

const BooksList = () => {
  const [books, setBooks] = useState(booksData);

  const deleteBook = (title) => {
    const filtredBooks = books.filter((book) => book.title !== title);
    setBooks(filtredBooks);
  };

  return (
    <>
      <BooksWrapper>
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
