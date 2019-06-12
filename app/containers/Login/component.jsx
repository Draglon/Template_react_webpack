import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const LoginSchema = Yup.object().shape({
  username: Yup.string().required('Required login'),
  password: Yup.string().required('Required password'),
});

const Login = ({ setAccess }) => (
  <section className="section">
    <div className="wrapper">
      <h2 className="section__title">Login</h2>

      <Formik
        initialValues={{ username: '', password: '' }}
        validationSchema={LoginSchema}
        onSubmit={values => setAccess(values)}
      >
        {() => (
          <Form>
            <Field name="username" />
            <ErrorMessage name="username" component="div" />
            <Field type="password" name="password" />
            <ErrorMessage name="password" component="div" />
            <button className="btn btn-primary btn-small" type="submit">
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  </section>
);

export default Login;
