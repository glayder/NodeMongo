

import React from 'react';
import { bool, func } from 'prop-types';

import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, isAllowed, ...rest }) => (
  <Route
    {...rest}
    render={props => (isAllowed === true ? <Component {...props} {...rest} /> : <Redirect to="/login" />)}
  />
);

PrivateRoute.propTypes = {
  component: func.isRequired,
  isAllowed: bool.isRequired,
};

export default PrivateRoute;
