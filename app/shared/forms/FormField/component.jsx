import React from 'react';
import PropTypes from 'prop-types';
import { ErrorMessage } from 'formik';
import { Input } from 'antd';

const FormField = ({ field, field: { name }, form: { touched, errors }, fieldPrefix, ...rest }) => (
  <div className={`form__field${touched[name] && errors[name] ? ' form__field--error' : ''}`}>
    <Input {...field} {...rest} className="error" prefix={fieldPrefix} />
    <ErrorMessage name={name} component="div" />
  </div>
);

FormField.defaultProps = {
  fieldPrefix: null,
};

FormField.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,
  fieldPrefix: PropTypes.node,
};

export default FormField;
