import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Icon } from 'antd';
import FormField from '../../shared/forms/FormField';
import FormButton from '../../shared/forms/Button';

const LoginSchema = Yup.object().shape({
  username: Yup.string()
    .matches(/[a-z,A-Z,0-9]/, 'Should be combination of numbers & alphabets')
    .required('Should be required'),
  password: Yup.string().required('Should be required'),
});

const LoginForm = ({ setAccess }) => (
  <div className="login">
    <h2 className="section__title">The Movie DB</h2>
    <Formik
      initialValues={{ username: '', password: '' }}
      validationSchema={LoginSchema}
      onSubmit={setAccess}
    >
      {() => (
        <Form className="form login__form">
          <Field
            type="text"
            name="username"
            component={FormField}
            placeholder="Username"
            fieldPrefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
          />
          <Field
            type="password"
            name="password"
            component={FormField}
            placeholder="Password"
            fieldPrefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
          />
          <FormButton htmlType="submit" type="primary" size="small" value="Log in" icon="loading" />
        </Form>
      )}
    </Formik>
  </div>
);

export default LoginForm;
