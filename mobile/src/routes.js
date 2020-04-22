import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import SignIn from '~/pages/SignIn';

import DashboardScreens from '~/tabRoutes/dashboardScreens';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: '#7159c1'},
        headerTintColor: '#fff',
      }}>
      <Stack.Screen
        name="Dashboard"
        component={DashboardScreens}
        screenOptions={{headerStyle: {backgroundColor: '#7159c1'}}}
      />
      <Stack.Screen name="SignIn" component={SignIn} />
    </Stack.Navigator>
  );
}
