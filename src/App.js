import React, {Component} from 'react';
import thunk from 'redux-thunk';

import {Text} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import CocktailFinderScreen from './screens/CocktailFinderScreen';
import HomeScreen from './screens/Home';
import store from './store/store';



export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}

const AppNav = createStackNavigator({
  Home: {
    screen: HomeScreen,
  },
  Find: {
    screen: CocktailFinderScreen,
  },
});
const AppContainer = createAppContainer(AppNav);
