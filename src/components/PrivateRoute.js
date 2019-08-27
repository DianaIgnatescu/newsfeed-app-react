import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest}) => (
  <Route
    {...rest}
    render={ props => (
      localStorage.getItem('email')
        ? (
          <Component {...props} />
        )
        : (
          <Redirect to={{ pathname: '/login' }} />
        )
    )}
  />
);

export default PrivateRoute;
