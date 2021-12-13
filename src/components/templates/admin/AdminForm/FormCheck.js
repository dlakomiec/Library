import React from 'react';
import ReactDOM from 'react-dom';
import { Formik, Field, Form } from 'formik';

const Example = () => (
  <div>
    <h1>Sign Up</h1>
    <Formik
      initialValues={{
        picked: '',
      }}
    >
      {({ values }) => (
        <Form>
          <div>Picked</div>
          <div>
            <label>
              <Field type="radio" name="picked" value="One" />
              One
            </label>
            <label>
              <Field type="radio" name="picked" value="Two" />
              Two
            </label>
            <div>Picked: {values.picked}</div>
          </div>
        </Form>
      )}
    </Formik>
  </div>
);

export default Example;
