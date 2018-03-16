import React, { Component } from 'react';
import {
  Body,
  Button,
  Container,
  Content,
  Footer,
  FooterTab,
  Header,
  Icon,
  Left,
  Right,
  Title
} from 'native-base';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  FlatList,
} from 'react-native';

import movieService from '../services/movie.service';
import Styles from '../Styles/Styles'
import  { StackNavigator } from 'react-navigation';

export default class PersonSummary extends React.Component {
  render(){
    return(
        <View style={Styles.container}>
        <Text style={Styles.paragraph}>
          PersonSummary
        </Text>
        </View>
    )
  }
  }