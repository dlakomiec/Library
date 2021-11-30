import React from 'react';
import styled from 'styled-components';
import { Formik } from 'formik';
import * as Yup from 'yup';
import FormInput from 'components/molecules/FormInput/FormInput';
import firebase from 'util/firebase';

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
          <form onSubmit={handleSubmit}>
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
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </form>
        );
      }}
    </Formik>
  );
};

export default Form1;
