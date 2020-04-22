import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Profile from '~/pages/Profile';
import Deliveries from '~/pages/Dashboard/Deliveries';

const Tab = createBottomTabNavigator();

export default function DashboardScreens() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Entregas" component={Deliveries} />
      <Tab.Screen name="Meu Perfil" component={Profile} />
    </Tab.Navigator>
  );
}
