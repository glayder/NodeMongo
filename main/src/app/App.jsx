

import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';
import { Provider } from 'react-redux';

import UsersScreenContainer from '../modules/user/UsersScreen.container';
import LoginScreen from '../modules/login/LoginScreen';

import PrivateRoute from '../modules/private-route/PrivateRoute';

import { loggedIn } from '../util/AuthService';
import store from '../setup/store';

const App = () => {
  const { token, user } = loggedIn();
  let profile = '';
  if (user) {
    profile = user.profileType;
  }

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={LoginScreen} />
          <PrivateRoute path="/users" component={UsersScreenContainer} isAllowed={token} user={user} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
