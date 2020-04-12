import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import MainPage from './components/MainPage';
import SetUpAccount from './components/SetUpAccount';
import DetailsPage from './components/DetailsPage';

const RootStack = createStackNavigator(
  {
    MainPage: {
      screen: MainPage,
      navigationOptions: {
        headerShown: false,
      },
    },
    SetUpAccount: {
      screen: SetUpAccount,
      navigationOptions: {
        headerShown: false,
      },
    },
    DetailsPage: {
      screen: DetailsPage,
      navigationOptions: {
        headerShown: false,
      },
    },
  },
  {
    initialRouteName: 'MainPage',
  },
);

const AppContainer = createAppContainer(RootStack);

export default function App() {
  return <AppContainer />;
}
