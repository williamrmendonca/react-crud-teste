import React, { lazy, Suspense } from 'react';
import { Switch, Redirect } from 'react-router-dom';
import Route from './Route';

import SignIn from '~/pages/SignIn';
import SignUp from '~/pages/SignUp';

// import Users from '~/pages/Users';
// import Testes from '~/pages/Testes';
const Users = lazy(() => import('~/pages/Users'));
const Testes = lazy(() => import('~/pages/Testes'));

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/register" exact component={SignUp} />

      <Route
        path="/users"
        exact
        component={WaitingComponent(Users)}
        isPrivate
      />
      <Route
        path="/testes"
        exact
        component={WaitingComponent(Testes)}
        isPrivate
      />

      <Route path="/*" component={() => <Redirect to="/users" />} />
    </Switch>
  );
}

function WaitingComponent(Component) {
  return props => (
    <Suspense fallback={<div>Loading...</div>}>
      <Component {...props} />
    </Suspense>
  );
}
