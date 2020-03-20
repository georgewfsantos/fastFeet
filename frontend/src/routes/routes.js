import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import ListAddressees from '~/pages/Addressees/ListAddressees';
import EditAddresse from '~/pages/Addressees/EditAddressee';
import NewAddressee from '~/pages/Addressees/NewAddressee';

import ListDeliverers from '~/pages/Deliverers/ListDeliverers';
import EditDeliverer from '~/pages/Deliverers/EditDeliverer';
import NewDeliverer from '~/pages/Deliverers/NewDeliverer';

import ListOrders from '~/pages/Orders/ListOrders';
import EditOrder from '~/pages/Orders/EditOrder';
import NewOrder from '~/pages/Orders/NewOrder';
import OrderDetails from '~/pages/Orders/OrderDetails';

import IssueDetails from '~/pages/OrderIssues/IssueDetails';
import ListAllIssues from '~/pages/OrderIssues/ListAllIssues';

import Login from '~/pages/SignIn/Login';

export default function AllRoutes() {
  return (
    <Switch>
      <Route path="/addressees/edit" isPrivate>
        <EditAddresse />
      </Route>
      <Route path="/addressees/new" isPrivate>
        <NewAddressee />
      </Route>
      <Route path="/addressees" isPrivate>
        <ListAddressees />
      </Route>

      <Route path="/deliverers/edit" isPrivate>
        <EditDeliverer />
      </Route>
      <Route path="/deliverers/new" isPrivate>
        <NewDeliverer />
      </Route>
      <Route path="/deliverers" isPrivate>
        <ListDeliverers />
      </Route>

      <Route path="/orders/edit" isPrivate>
        <EditOrder />
      </Route>
      <Route path="/orders/new" isPrivate>
        <NewOrder />
      </Route>
      <Route path="/orders/:orderId/details" isPrivate>
        <OrderDetails />
      </Route>
      <Route path="/orders" isPrivate>
        <ListOrders />
      </Route>

      <Route path="/orderIssues/:orderId/details" isPrivate>
        <IssueDetails />
      </Route>
      <Route path="/ordersIssues" isPrivate>
        <ListAllIssues />
      </Route>

      <Route path="/">
        <Login />
      </Route>
    </Switch>
  );
}
