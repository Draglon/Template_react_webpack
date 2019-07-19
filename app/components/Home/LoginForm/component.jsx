import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Typography, Icon, Layout } from 'antd';
import FormField from '../../../shared/forms/FormField';
import FormButton from '../../../shared/forms/Button';

const LoginSchema = Yup.object().shape({
  username: Yup.string()
    .matches(/[a-z,A-Z,0-9]/, 'Should be combination of numbers & alphabets')
    .required('Should be required'),
  password: Yup.string()
    .min(4, 'Too short! Min 4 Symbols')
    .required('Should be required'),
});

const LoginFormComponent = ({ onSubmit, loginError }) => (
  <Layout className="login">
    <Typography.Title>The Movie DB</Typography.Title>
    <Formik
      initialValues={{ username: '', password: '' }}
      validationSchema={LoginSchema}
      onSubmit={onSubmit}
      render={props => (
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
          <FormButton
            htmlType="submit"
            type="primary"
            value="Log in"
            size="default"
            icon={props.isSubmitting ? 'loading' : ''}
          />
          {loginError && (
            <div className="login__error">Pleace, check your login or password and try again</div>
          )}
        </Form>
      )}
    />
  </Layout>
);

LoginFormComponent.defaultProps = {
  loginError: '',
};

LoginFormComponent.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  loginError: PropTypes.string,
};

export default LoginFormComponent;
