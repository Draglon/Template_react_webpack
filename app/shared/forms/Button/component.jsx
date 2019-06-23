import React from 'react';

const FormButton = ({ type, value }) => (
  <div className="align-center">
    <button type={type} className="btn btn-primary btn--small btn-submit">
      {value}
    </button>
  </div>
);

export default FormButton;
