import 'react-native-gesture-handler';

import React from 'react';
import {StatusBar} from 'react-native';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';

import {NavigationContainer} from '@react-navigation/native';

import '~/config/reactotronConfig';

import {store, persistor} from '~/store';

import Routes from '~/routes';

export default function index() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <NavigationContainer>
          <StatusBar barStyle="light-content" />
          <Routes />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}
