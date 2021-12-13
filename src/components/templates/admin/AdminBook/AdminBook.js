import React from 'react';
import firebase from 'util/firebase';
import './App.css';
import { WrapperBook, DeleteButton, CompleteButton } from './Book.styles';

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
      {/*<p className={book.complete ? 'complete' : ''}>*/}
      {/*  <span>Gatunek ksiązki: </span>*/}
      {/*  {book.genre}*/}
      {/*</p>*/}
      <p className={book.complete ? 'complete' : ''}>
        <span>Liczba stron: </span>
        {book.pages}
      </p>
      <p className={book.complete ? 'complete' : ''}>
        <span>Gatunek książki: </span>
        {book.picked}
      </p>

      <DeleteButton onClick={deleteBook}>Usuń ksiazke</DeleteButton>
      <CompleteButton onClick={completeBook}>Complete</CompleteButton>
    </WrapperBook>
  );
};

export default Book;
