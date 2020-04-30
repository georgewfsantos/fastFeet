import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Deliveries from '~/pages/Deliveries';
import OrderDetails from '~/pages/OrderDetails';
import AddDeliveryIssue from '~/pages/AddDeliveryIssue';
import ViewDeliveryIssues from '~/pages/ViewDeliveryIssues';
import SetAsDelivered from '~/pages/SetAsDelivered';

const Stack = createStackNavigator();

export default function DeliveryRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#7D40E7',
        },
        headerTitleAlign: 'center',
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontSize: 20,
          fontWeight: 'bold',
        },
        headerBackTitleVisible: false,
        headerTransparent: true,
        headerLeftContainerStyle: {
          marginLeft: 20,
        },
      }}>
      <Stack.Screen
        name="Entregas"
        component={Deliveries}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Detalhes da encomenda" component={OrderDetails} />
      <Stack.Screen name="Informar problema" component={AddDeliveryIssue} />
      <Stack.Screen
        name="Visualizar problemas"
        component={ViewDeliveryIssues}
      />
      <Stack.Screen name="Confirmar entrega" component={SetAsDelivered} />
    </Stack.Navigator>
  );
}
