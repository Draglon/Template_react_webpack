import React from 'react';
import { Button } from 'antd';

const FormButton = ({ htmlType, type, value, size, icon = '', hidden = false }) => (
  <div className="align-center">
    <Button htmlType={htmlType} type={type} size={size} icon={icon} hidden={hidden}>
      {value}
    </Button>
  </div>
);

export default FormButton;
