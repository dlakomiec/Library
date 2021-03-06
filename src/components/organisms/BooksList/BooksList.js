import React, { useState, useEffect } from 'react';
import firebase from 'util/firebase';
import { BooksWrapper, Wrapper } from './BooksList.styles';
import Book from '../Book/Book';
import Navigation from '../Navigtion/Navigation';

const BooksList = () => {
  const [bookList, setbookList] = useState([]);

  useEffect(() => {
    const bookRef = firebase.database().ref('Lista ksiazek');
    bookRef.on('value', (snapshot) => {
      const books = snapshot.val();
      const arr = [];
      Object.keys(books).forEach((id) => {
        arr.push({ ...books[id], id });
      });
      setbookList(arr);
    });

    return () => {
      setbookList([]);
    };
  }, []);

  return (
    <>
      <Navigation />
      <Wrapper>
        <BooksWrapper>
          <h2>Lista ksiazek</h2>
          <div>
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
