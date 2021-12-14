import React from 'react';
import styled from 'styled-components';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import FormInput from 'components/molecules/FormInput/FormInput';
import firebase from 'util/firebase';
import AdminNavigation from '../AdminNavigation/AdminNavigation';

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

const ChecboxForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 200px;
`;

const initialValues = { author: '', title: '', pages: '', picked: '' };
// const initialValues = { author: '', title: '', genre: '', pages: '', picked: '' };

const AdminForm = () => {
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
    // genre: Yup.string().required('Gatunek jest wymagany'),
    pages: Yup.string().required('Liczba stron jest wymagana '),
    // picked: Yup.string().required('Liczba stron jest wymagana '),
  });

  return (
    <>
      <AdminNavigation />
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
                    Rozwój osobisty
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

export default AdminForm;
