/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {TabNavigator,TabBarBottom, StackNavigator,NavigationAction} from 'react-navigation';

import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Styles from '../Styles/Styles';
import BrowsePage from './BrowsePage';
import SearchPage from './SearchPage';
import  MovieDetail from './MovieDetail';
import  MovieSummary from './MovieSummary';
import  PersonDetail from './PersonDetail';
import  PersonSummary from  './PersonSummary';

const RootBrowse = StackNavigator({

  BrowsePage: {
      screen: BrowsePage
  },
  MovieDetail: {
      screen: MovieDetail
  },
  MovieSummary: {
      screen: MovieSummary
  },
  PersonDetail: {
    screen: PersonDetail
  },
  PersonSummary: {
      screen: PersonSummary
  }
})
const RootSearch = StackNavigator({
  SearchPage: {
      screen: SearchPage
  },
  PersonDetail: {
      screen: PersonDetail
  },
  PersonSummary: {
      screen: PersonSummary
  },
  MovieDetail: {
    screen: MovieDetail
  },
  MovieSummary: {
      screen: MovieSummary
  },
})
 

const RootTab = TabNavigator({
  Discover: { screen: RootBrowse },
  Search: { screen: RootSearch },
},
{
  navigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, tintColor }) => {
      const { routeName } = navigation.state;
      let iconName;
      if (routeName === 'Discover') {
        iconName = `md-paper`;
      } else if (routeName === 'Search') {
        iconName = `ios-search`;
      }

      // You can return any component that you like here! We usually use an
      // icon component from react-native-vector-icons
      return <Ionicons name={iconName} size={25} color={tintColor} />;
    },
  }),
  tabBarOptions: {
    activeTintColor: 'tomato',
    inactiveTintColor: 'gray',
  },
  tabBarComponent: TabBarBottom,
  tabBarPosition: 'bottom',
  animationEnabled: true,
  swipeEnabled: true,
}

);
export default class App extends Component {
  render() {
    return (
      <RootTab/>
    );
  }
}

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});




