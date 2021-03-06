import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import FormInput from 'components/molecules/FormInput/FormInput';
import firebase from 'util/firebase';
import Navigation from '../Navigtion/Navigation';
import { Wrapper, FormStyled, AddBookButton, ChecboxForm } from './Form.styles';

const initialValues = { author: '', title: '', genre: '', pages: '' };

const Form1 = () => {
  const onSubmit = async (values, actions) => {
    const bookRef = firebase.database().ref('Lista ksiazek');
    const book = {
      ...values,
      complete: false,
    };
    bookRef.push(book);
    alert('Dodano książkę');
    actions.resetForm();
  };

  const handleValidation = Yup.object().shape({
    author: Yup.string().required('Autor jest wymagany'),
    title: Yup.string().required('Tytuł jest wymagany'),
    genre: Yup.string().required('Gatunek jest wymagany'),
    pages: Yup.string().required('Liczba stron jest wymagana '),
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
                {/*<FormInput*/}
                {/*  id="genre"*/}
                {/*  placeholder="genre"*/}
                {/*  type="text"*/}
                {/*  values={values}*/}
                {/*  onChange={handleChange}*/}
                {/*  onBlur={handleBlur}*/}
                {/*  errors={errors}*/}
                {/*  touched={touched}*/}
                {/*  labelValue="Gatunek: "*/}
                {/*/>*/}
                <FormInput
                  id="pages"
                  placeholder="pages"
                  type="number"
                  values={values}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  errors={errors}
                  touched={touched}
                  labelValue="Liczba stron: "
                />
                <ChecboxForm>
                  <p>Gatunek książki:</p>
                  <label>
                    <Field type="radio" name="genre" value="Fantasy" />
                    Fantasy
                  </label>
                  <label>
                    <Field type="radio" name="genre" value="Biografia" />
                    Biografia
                  </label>
                  <label>
                    <Field type="radio" name="genre" value="Rozwój osobisty" />
                    Rozwój osobistyddddddddddddddddddddddd
                  </label>
                  <label>
                    <Field type="radio" name="genre" value="Kryminał" />
                    Kryminał
                  </label>
                  <label>
                    <Field type="radio" name="genre" value="Naukowe" />
                    Naukowe
                  </label>

                  <div>Wybrany gatunek: {values.genre}</div>
                </ChecboxForm>

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
