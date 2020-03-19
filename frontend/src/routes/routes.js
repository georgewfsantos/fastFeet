import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from '~/pages/Login';
import Sail from '~/pages/Sail';

export default function AllRoutes() {
  return (
    <Switch>
      <Route path="/sail">
        <Sail />
      </Route>
      <Route path="/">
        <Login />
      </Route>
    </Switch>
  );
}
