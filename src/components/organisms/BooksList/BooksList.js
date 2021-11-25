import React, { useState, useEffect } from 'react';
import firebase from 'util/firebase';
import { BooksWrapper } from './BooksList.styles';
import styled from 'styled-components';
import Book from '../Book/Book';

const FormWrapper = styled.div``;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const BooksList = () => {
  const [bookList, setbookList] = useState();

  useEffect(() => {
    const bookRef = firebase.database().ref('Lista ksiazek');
    bookRef.on('value', (snapshot) => {
      const books = snapshot.val();
      const bookList = [];
      for (let id in books) {
        bookList.push({ ...books[id], id });
      }
      setbookList(bookList);
    });
  }, []);

  return (
    <>
      <Wrapper>
        <BooksWrapper>
          <div>
            <h2>Lista ksiazek</h2>
            <ul>
              {bookList
                ? bookList.map((book, index) => (
                    <Book book={book} key={index} />
                  ))
                : ''}
            </ul>
          </div>
        </BooksWrapper>
      </Wrapper>
    </>
  );
};

export default BooksList;
