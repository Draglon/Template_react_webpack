import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

const PrivateRouteComponent = ({ component: Component, islogged, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        (islogged ? (
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
