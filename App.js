/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {Text} from 'react-native';
import {Provider} from 'react-redux';
import {persistor, store} from './src/store/store';
import {PersistGate} from 'redux-persist/integration/react';
import Splash from './src/screens/splash/Splash';
import SafeAreaView from 'react-native/Libraries/Components/SafeAreaView/SafeAreaView';

const App: () => Node = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={<Splash />} persistor={persistor}>
        <SafeAreaView>
          <Text>Hi</Text>
        </SafeAreaView>
      </PersistGate>
    </Provider>
  );
};

export default App;
