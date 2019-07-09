import React from 'react';
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

export default PrivateRouteComponent;
