import React from 'react';
import firebase from 'util/firebase';
import './App.css';
// import { WrapperBook, DeleteButton, MoveButton } from './UpcomingBook.styles';
import {
  WrapperBook,
  DeleteButton,
  MoveButton,
  DownloadButton,
} from './UpcomingBook.styles';
import UpcomingForm from './UpcomingForm';

const UpcomingBook = ({ book, ...props }) => {
  const deleteBook = () => {
    const bookRef = firebase
      .database()
      .ref('Nadchodzące książki')
      .child(book.id);
    bookRef.remove();
  };
  const completeBook = () => {
    const bookRef = firebase
      .database()
      .ref('Nadchodzące książki')
      .child(book.id);
    bookRef.update({
      complete: !book.complete,
    });
  };

  const moveBook = async (book) => {
    const bookRef = firebase.database().ref('Lista ksiazek');
    const bookDel = firebase
      .database()
      .ref('Nadchodzące książki')
      .child(book.id);
    bookDel.remove();
    const books = {
      ...book,
    };
    alert('Książka została przeniesiona');
    bookRef.push(book);
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
        <span>Liczba stron: </span>
        {book.pages}
      </p>
      <p className={book.complete ? 'complete' : ''}>
        <span>Gatunek książki: </span>
        {book.genre}
      </p>
      <p className={book.complete ? 'complete' : ''}>
        <span>Chcesz pobrać? </span>

        <DownloadButton>
          <a href={book.downloadURL} target="_blank">
            {' '}
            Kliknij tutaj
          </a>
        </DownloadButton>
      </p>
      <DeleteButton onClick={deleteBook}>Usuń ksiazke</DeleteButton>
      <MoveButton onClick={() => moveBook(book)}>
        Przenieś do książek
      </MoveButton>
    </WrapperBook>
  );
};

export default UpcomingBook;
