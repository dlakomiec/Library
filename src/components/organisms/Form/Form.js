import React, { useState } from 'react';
import AddBookButton from 'components/atoms/AddBookButton/AddBookButton';
import styled from 'styled-components';
import firebase from 'util/firebase';

const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  label {
    margin: 10px 0;
  }
`;
const Input = styled.input`
  padding: 5px 8px;
  border: 1px solid black;
  border-radius: 20px;
  width: 250px;
  &:focus {
    outline: none;
    box-shadow: -1px 2px 8px rgba(115, 124, 142, 0.3);
  }
`;

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
    } else {
      alert(`Wszystkie pola muszą byc wypełnione`);
    }
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
