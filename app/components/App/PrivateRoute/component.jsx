import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

const PrivateRouteComponent = ({ component: Component, sessionId, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        (sessionId ? (
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
  sessionId: PropTypes.string.isRequired,
};

export default PrivateRouteComponent;
