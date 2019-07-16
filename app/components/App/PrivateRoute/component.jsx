import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

const PrivateRouteComponent = ({ component: Component, isLogged, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        (isLogged ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/',
              state: { from: props.location },
            }}
          />
        ))
      }
    />
  );
};

PrivateRouteComponent.propTypes = {
  component: PropTypes.func.isRequired,
  isLogged: PropTypes.string.isRequired,
};

export default PrivateRouteComponent;
