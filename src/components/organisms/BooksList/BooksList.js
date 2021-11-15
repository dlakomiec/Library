import React from 'react';
import styled from 'styled-components';
import BooksListItem from '../BooksListItem/BooksListItem';
import { books } from 'data/books';

const BooksWrapper = styled.div`
  position: absolute;
  right: 0;
  height: 100vh;
  width: 50%;
  background-color: #eff2f1;
  overflow-y: scroll;
`;

const BooksList = () => (
  <>
    <BooksWrapper>
      {/* <h2>Books list </h2> */}
      <ul>
        {books.map((bookData) => (
          <BooksListItem bookData={bookData} />
        ))}
      </ul>
    </BooksWrapper>
  </>
);

export default BooksList;
