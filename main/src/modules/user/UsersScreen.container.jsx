import React from 'react';

import { Redirect, Switch } from 'react-router-dom';

import Route from '../private-route/PrivateRoute';
import UserEdit from './UserEdit';
import Users from './Users';

import { loggedIn } from '../../util/AuthService';

const basePath = '/users';

const UsersScreenContainer = () => {
  const { token, user } = loggedIn();
  return (
    <Switch>
      <Redirect exact from={basePath} to={`${basePath}/list`} />
      <Route path={`${basePath}/list`} component={Users} />
      <Route path={`${basePath}/edit/:id?`} component={UserEdit} />
    </Switch>
  );
};

export default UsersScreenContainer;
