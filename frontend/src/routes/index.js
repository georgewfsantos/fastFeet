import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import ListAddressees from '~/pages/Addressees/ListAddressees';
import EditAddressee from '~/pages/Addressees/EditAddressee';
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

import SignIn from '~/pages/SignIn';

export default function AllRoutes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/addressees" exact isPrivate component={ListAddressees} />
      <Route
        path="/addressees/:addresseeId/edit"
        isPrivate
        component={EditAddressee}
      />
      <Route path="/addressees/new" isPrivate component={NewAddressee} />

      <Route path="/deliverers" exact isPrivate component={ListDeliverers} />
      <Route
        path="/deliverers/:delivererId/edit"
        isPrivate
        component={EditDeliverer}
      />
      <Route path="/deliverers/new" isPrivate component={NewDeliverer} />

      <Route path="/orders" exact isPrivate component={ListOrders} />
      <Route
        path="/orders/:orderId/editOrder"
        isPrivate
        component={EditOrder}
      />
      <Route path="/orders/new" isPrivate component={NewOrder} />
      <Route
        path="/orders/:orderId/details"
        isPrivate
        component={OrderDetails}
      />

      <Route path="/orderIssues" exact isPrivate component={ListAllIssues} />
      <Route
        path="/orderIssues/:orderIssueId/details"
        isPrivate
        component={IssueDetails}
      />
    </Switch>
  );
}
