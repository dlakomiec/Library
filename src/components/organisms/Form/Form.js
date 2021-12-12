import React from 'react';
import styled from 'styled-components';
import { Formik } from 'formik';
import * as Yup from 'yup';
import FormInput from 'components/molecules/FormInput/FormInput';
import firebase from 'util/firebase';
import Navigation from '../Navigtion/Navigation';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;

  label {
    margin: 10px 0;
  }
`;

const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  /* align-item: center; */
`;

const AddBookButton = styled.button`
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.blue};
  border: none;
  border-radius: 20px;
  color: white;
  padding: 4px;
  font-weight: bold;
  text-transform: uppercase;
`;

const initialValues = { author: '', title: '', genre: '' };

const Form1 = () => {
  const onSubmit = async (values, actions) => {
    const bookRef = firebase.database().ref('Lista ksiazek');
    const book = {
      ...values,
      complete: false,
    };
    bookRef.push(book);
    actions.resetForm();
  };

  const handleValidation = Yup.object().shape({
    author: Yup.string().required('Autor jest wymagany'),
    title: Yup.string().required('Tytuł jest wymagany'),
    genre: Yup.string().required('Gatunek jest wymagany'),
  });

  return (
    <>
      <Navigation />
      <Wrapper>
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={handleValidation}
        >
          {(props) => {
            const {
              values,
              touched,
              errors,
              isSubmitting,
              handleChange,
              handleBlur,
              handleSubmit,
            } = props;
            return (
              <FormStyled onSubmit={handleSubmit}>
                <FormInput
                  id="author"
                  placeholder="Enter author"
                  type="text"
                  values={values}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  errors={errors}
                  touched={touched}
                  labelValue="Author: "
                />
                <FormInput
                  id="title"
                  placeholder="Enter title"
                  type="text"
                  values={values}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  errors={errors}
                  touched={touched}
                  labelValue="Title: "
                />
                <FormInput
                  id="genre"
                  placeholder="genre"
                  type="text"
                  values={values}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  errors={errors}
                  touched={touched}
                  labelValue="Gatunek: "
                />
                <AddBookButton type="submit" disabled={isSubmitting}>
                  Dodaj
                </AddBookButton>
              </FormStyled>
            );
          }}
        </Formik>
      </Wrapper>
    </>
  );
};

export default Form1;
