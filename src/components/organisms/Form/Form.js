import React, { useState } from 'react';
import AddBookButton from 'components/atoms/AddBookButton/AddBookButton';
import firebase from 'util/firebase';
import { FormWrapper, Wrapper, Input } from './Form.styles';

const Form = () => {
  const [title, setTitle] = useState('');
  const handleOnChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const [author, setAuthor] = useState('');
  const handleOnChangeAuthor = (e) => {
    setAuthor(e.target.value);
  };

  const [genre, setGenre] = useState('');
  const handleOnChangeGenre = (e) => {
    setGenre(e.target.value);
  };

  const createBook = (e) => {
    e.preventDefault();

    if (title && author && genre) {
      const bookRef = firebase.database().ref('Lista ksiazek');
      const book = {
        title,
        author,
        genre,
        complete: false,
      };
      alert(`Dodano ksiazke o nazwie ${title}`);
      bookRef.push(book);
    }

    setTitle('');
    //  else {
    //   alert(`Wszystkie pola muszą byc wypełnione`);
    // }
  };
  return (
    <Wrapper>
      <FormWrapper as="form" onSubmit={createBook}>
        <h2>Dodaj ksiązkę </h2>

        <label>Tytuł</label>
        <Input
          placeholder="Tytuł"
          value={title}
          onChange={handleOnChangeTitle}
        />
        <label>Autor</label>

        <Input
          placeholder="Autor"
          value={author}
          onChange={handleOnChangeAuthor}
        />
        <label>Gatnek</label>

        <Input
          placeholder="Gatunek"
          value={genre}
          onChange={handleOnChangeGenre}
        />

        <AddBookButton type="submite">Dodaj ksiazke</AddBookButton>
      </FormWrapper>
    </Wrapper>
  );
};

export default Form;
