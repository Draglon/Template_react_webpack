import React from 'react';
import { Button } from 'antd';

const FormButton = ({ htmlType, type, value, size, icon = '' }) => (
  <div className="align-center">
    <Button htmlType={htmlType} type={type} size={size} icon={icon}>
      {value}
    </Button>
  </div>
);

export default FormButton;
