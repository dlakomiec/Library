import React from 'react';
import firebase from 'util/firebase';
import { WrapperBook, DeleteButton, DownloadButton } from './Book.styles';

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
      <p>
        <span>Tytuł ksiązki: </span> {book.title}
      </p>
      <p>
        <span>Autor ksiazki: </span>
        {book.author}
      </p>

      <p>
        <span>Liczba stron: </span>
        {book.pages}
      </p>
      <p>
        <span>Gatunek książki: </span>
        {book.genre}
      </p>
      <p>
        <span>Chcesz pobrać? </span>

        <DownloadButton>
          <a href={book.downloadURL} target="_blank">
            {' '}
            Kliknij tutaj
          </a>
        </DownloadButton>
      </p>

      <DeleteButton onClick={deleteBook}>Usuń ksiazke</DeleteButton>
    </WrapperBook>
  );
};

export default Book;
