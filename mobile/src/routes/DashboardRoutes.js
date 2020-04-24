import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import PropTypes from 'prop-types';

import Icon from 'react-native-vector-icons/MaterialIcons';

import Profile from '~/pages/Profile';
import DeliveryRoutes from './DeliveryRoutes';

const Tab = createBottomTabNavigator();

export default function DashboardRoutes() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#7D40E7',
        inactiveTintColor: '#999999',
      }}>
      <Tab.Screen
        name="Entregas"
        component={DeliveryRoutes}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="reorder" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Meu Perfil"
        component={Profile}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="account-circle" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

DashboardRoutes.propTypes = {
  color: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
};
