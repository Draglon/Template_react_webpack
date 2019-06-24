import React from 'react';
import { ErrorMessage } from 'formik';
import { Input } from 'antd';

const FormField = ({ field, field: { name }, form: { errors }, fieldPrefix = false, ...rest }) => (
  <div className={`form__field${errors ? ' form__error' : ''}`}>
    <Input {...field} {...rest} className="error" prefix={fieldPrefix} />
    <ErrorMessage name={name} component="div" />
  </div>
);

export default FormField;
