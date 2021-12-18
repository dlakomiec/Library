import React, { useState, useEffect } from 'react';
import firebase from 'util/firebase';
import UpcomingBook from './UpcomingBook';
import styled from 'styled-components';
import './App.css';

const Wrapper = styled.div`
  //display: flex;
  //flex-direction: row;
  //justify-content: center;
  //align-items: center;
  h2 {
    padding-top: 25px;
    text-shadow: 2px 2px 2px #000000;
  }
`;

const UpcomingList = () => {
  const [bookList, setbookList] = useState([]);

  useEffect(() => {
    const bookRef = firebase.database().ref('Nadchodzące książki');
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
      <Wrapper>
        <h2>NOWOŚCI </h2>
        <div className="slider">
          {bookList
            ? bookList.map((book, index) => (
                <UpcomingBook book={book} key={index} />
              ))
            : ''}
        </div>
      </Wrapper>
    </>
  );
};

export default UpcomingList;
