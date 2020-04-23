import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import SignIn from '~/pages/SignIn';

import DashboardRoutes from './DashboardRoutes';

const Stack = createStackNavigator();

export default (signedIn = false) => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: {backgroundColor: '#7159c1'},
      headerTintColor: '#fff',
      headerShown: false,
    }}>
    {signedIn ? (
      <Stack.Screen name="Dashboard" component={DashboardRoutes} />
    ) : (
      <Stack.Screen name="SignIn" component={SignIn} />
    )}
  </Stack.Navigator>
);
