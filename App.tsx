/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Button,
} from 'react-native';

import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import SplashScreen from './src/screens/Splash/SplashScreen'
import TypesScreen from './src/screens/Types/TypesScreen'
import Interfaces from './src/screens/Interface/Interfaces'


const StandardStack = createStackNavigator(
  {
    Types: TypesScreen,
    Interfaces: Interfaces,
  }, {
  headerMode: 'none'
})

const SwitchNavigator = createSwitchNavigator({
  Splash: SplashScreen,
  StandardStack: StandardStack,
},
  {
    initialRouteName: 'Splash',
  })

const AppContainer = createAppContainer(SwitchNavigator)

export default class App extends React.Component {
  render() {
    return (
      <AppContainer />
    );
  }
};




