import React, { useState, useEffect } from 'react';
import firebase from 'util/firebase';
import { BooksWrapper, Wrapper } from './BooksList.styles';
import AdminBook from '../AdminBook/AdminBook';
import AdminNavigation from '../AdminNavigation/AdminNavigation';

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
      {/*<Navigation />*/}
      <AdminNavigation />
      <Wrapper>
        <BooksWrapper>
          <h2>Lista ksiazek</h2>
          <div>
            <ul>
              {bookList
                ? bookList.map((book, index) => (
                    <AdminBook book={book} key={index} />
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
