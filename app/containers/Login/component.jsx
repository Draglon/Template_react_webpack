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
          <Form className="form">
            <Field
              name="username"
              render={({ field }) => (
                <div className="form__field">
                  <input {...field} type="text" placeholder="Login" />
                  <ErrorMessage name="username" component="div" className="form__error" />
                </div>
              )}
            />
            <Field
              type="password"
              name="password"
              render={({ field }) => (
                <div className="form__field">
                  <input {...field} type="text" placeholder="Password" />
                  <ErrorMessage name="password" component="div" className="form__error" />
                </div>
              )}
            />
            <div className="align-center">
              <button className="btn btn-primary btn--small btn-submit" type="submit">
                Submit
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  </section>
);

export default Login;
