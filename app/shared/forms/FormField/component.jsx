import React from 'react';
import { ErrorMessage } from 'formik';

const FormField = ({ field, field: { name }, type, placeholder }) => (
  <div className="form__field">
    <input {...field} type={type} placeholder={placeholder} />
    <ErrorMessage name={name} component="div" className="form__error" />
  </div>
);

export default FormField;
