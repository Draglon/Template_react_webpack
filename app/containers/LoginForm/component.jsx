import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import FormField from '../../shared/forms/FormField';
import FormButton from '../../shared/forms/Button';

const LoginSchema = Yup.object().shape({
  username: Yup.string().required('Required login'),
  password: Yup.string().required('Required password'),
});

const LoginForm = ({ setAccess }) => (
  <>
    <h2 className="section__title">Login</h2>
    <Formik
      initialValues={{ username: '', password: '' }}
      validationSchema={LoginSchema}
      onSubmit={setAccess}
    >
      {() => (
        <Form className="form">
          <Field type="text" name="username" component={FormField} placeholder="Login" />
          <Field type="password" name="password" component={FormField} placeholder="Password" />
          <FormButton type="submit" value="Submit" />
        </Form>
      )}
    </Formik>
  </>
);

export default LoginForm;
