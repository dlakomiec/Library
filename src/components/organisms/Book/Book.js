import React from 'react';
import PropTypes from 'prop-types';
import firebase from 'util/firebase';
import './App.css';
import { WrapperBook, DeleteButton, CompleteButton } from './Book.styles';

const Book = ({ book: { id, complete, title, author } }) => {
  const deleteBook = () => {
    const bookRef = firebase.database().ref('Lista ksiazek').child(id);
    bookRef.remove();
  };
  const completeBook = () => {
    const bookRef = firebase.database().ref('Lista ksiazek').child(id);
    bookRef.update({
      complete: !complete,
    });
  };

  return (
    <WrapperBook>
      <p className={complete ? 'complete' : ''}>
        <span>Tytuł ksiązki: </span> {title}
      </p>
      <p className={complete ? 'complete' : ''}>
        <span>Autor ksiazki: </span>
        {author}
      </p>
      <p className={complete ? 'complete' : ''}>
        <span>Gatunek ksiązki: </span>
        {title}
      </p>
      <DeleteButton onClick={deleteBook}>Usuń ksiazke</DeleteButton>
      <CompleteButton onClick={completeBook}>Complete</CompleteButton>
    </WrapperBook>
  );
};

export default Book;

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string,
    complete: PropTypes.bool,
    author: PropTypes.string,
    title: PropTypes.string,
  }),
};
