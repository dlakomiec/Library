import React from 'react';
import firebase from 'util/firebase';
import './App.css';
import styled from 'styled-components';

const WrapperBook = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  /* width: 500px; */
  margin: 15px 0 0 0;

  p {
    span {
      font-weight: bold;
    }
  }
`;

const DeleteButton = styled.button`
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.red};
  border: none;
  border-radius: 20px;
  color: white;
  padding: 4px;
  width: 150px;
  margin: 5px;
  font-weight: bold;
  text-transform: uppercase;
`;

const CompleteButton = styled.button`
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.yellow};
  border: none;
  border-radius: 20px;
  color: white;
  width: 150px;
  margin: 5px;

  padding: 4px;
  font-weight: bold;
  text-transform: uppercase;
`;

const Book = ({ book }) => {
  const deleteBook = () => {
    const bookRef = firebase.database().ref('Lista ksiazek').child(book.id);
    bookRef.remove();
  };
  const completeBook = () => {
    const bookRef = firebase.database().ref('Lista ksiazek').child(book.id);
    bookRef.update({
      complete: !book.complete,
    });
  };

  return (
    <WrapperBook>
      <p className={book.complete ? 'complete' : ''}>
        <span>Tytuł ksiązki: </span> {book.title}
      </p>
      <p className={book.complete ? 'complete' : ''}>
        <span>Autor ksiazki: </span>
        {book.author}
      </p>
      <p className={book.complete ? 'complete' : ''}>
        <span>Gatunek ksiązki: </span>
        {book.title}
      </p>
      <DeleteButton onClick={deleteBook}>Usuń ksiazke</DeleteButton>
      <CompleteButton onClick={completeBook}>Complete</CompleteButton>
    </WrapperBook>
  );
};

export default Book;
