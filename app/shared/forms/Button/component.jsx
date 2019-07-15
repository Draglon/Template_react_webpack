import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';

const FormButton = ({ htmlType, type, value, size, icon }) => (
  <div className="align-center">
    <Button htmlType={htmlType} type={type} size={size} icon={icon}>
      {value}
    </Button>
  </div>
);

FormButton.defaultProps = {
  icon: '',
};

FormButton.propTypes = {
  htmlType: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  icon: PropTypes.string,
};

export default FormButton;
