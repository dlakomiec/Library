import React, { useState, useEffect } from 'react';
import firebase from 'util/firebase';
import { BooksWrapper, Wrapper } from './BooksList.styles';
import Book from '../Book/Book';

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
