import React from 'react';
import firebase from 'util/firebase';
import './App.css';
import styled from 'styled-components';

const WrapperBook = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 300px;
  //border: 1px solid black;
  p {
    span {
      font-weight: bold;
    }
  }
`;

const UpcomingBook = ({ book, ...props }) => {
  return (
    <div className="slide">
      <WrapperBook>
        <p className={book.complete ? 'complete' : ''}>
          <span>Tytuł ksiązki: </span> {book.title}
        </p>
        <p className={book.complete ? 'complete' : ''}>
          <span>Autor ksiazki: </span>
          {book.author}
        </p>
        <p className={book.complete ? 'complete' : ''}>
          <span>Liczba stron: </span>
          {book.pages}
        </p>
        <p className={book.complete ? 'complete' : ''}>
          <span>Gatunek książki: </span>
          {book.genre}
        </p>
      </WrapperBook>
    </div>
  );
};

export default UpcomingBook;
