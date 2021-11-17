import React from 'react';
import FormField from 'components/molecules/FormField/FormField';
import AddBookButton from 'components/atoms/AddBookButton/AddBookButton';
import styled from 'styled-components';

const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Form = ({ handleAddBook, handleInputChange, formValues }) => {
  return (
    <FormWrapper as="form" onSubmit={handleAddBook}>
      <h2>Dodaj ksiązkę </h2>
      <FormField
        label="Tytul"
        id="title"
        title="title"
        value={formValues.title}
        onChange={handleInputChange}
      />
      <FormField
        label="Autor"
        id="author"
        title="author"
        value={formValues.author}
        onChange={handleInputChange}
      />
      <FormField
        label="Kategoria"
        id="genre"
        title="genre"
        value={formValues.genre}
        onChange={handleInputChange}
      />
      <AddBookButton type="submite" />
    </FormWrapper>
  );
};

export default Form;
