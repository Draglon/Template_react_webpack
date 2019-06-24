import React from 'react';

const FormButton = ({ value }) => (
  <div className="align-center">
    <button type="submit" className="btn btn-primary btn--small btn-submit">
      {value}
    </button>
  </div>
);

export default FormButton;
