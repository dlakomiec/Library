import React from 'react';
import BooksListItem from '../../molecules/BooksListItem/BooksListItem';
import { BooksWrapper } from './BooksList.styles';
import styled from 'styled-components';

const FormWrapper = styled.div``;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-left: 150px;
`;

const BooksList = ({ books, deleteBook }) => {
  return (
    <>
      <Wrapper>
        <BooksWrapper>
          <ul>
            <h2>List książek</h2>
            {books.map((bookData) => (
              <BooksListItem deleteBook={deleteBook} bookData={bookData} />
            ))}
          </ul>
        </BooksWrapper>
      </Wrapper>
    </>
  );
};

export default BooksList;
