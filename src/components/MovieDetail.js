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
  Title,
  Item
} from 'native-base';
import {
  Platform,
  StyleSheet,
  Text,
  Image,
  View,
  FlatList,
} from 'react-native';

import movieService from '../services/movie.service';
import Styles from '../Styles/Styles'
import  { StackNavigator } from 'react-navigation';

export default class MovieDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      loadmore: false
    }   
    MID = this.props.navigation.state.params.ID;
  }
  
  
  static navigationOptions = {
    
    title: "Movies",
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };
  componentDidMount() {
    this._getMovies(); 
  
  }
  _getMovies() {

    movieService.Getmovie(MID)
    .then(results =>{
      this.setState({data: results});
    })
    .catch(error => {
        console.log('Server connection failed');
    })
  }
  _renderItem() {
    return (
      <Container>
      <Text>{this.state.data.getTitle()}</Text>
      <Image source={{uri: this.state.data.getPoster()}}
      ResizeMethod="resize"
      style={{height: 300, width: null, flex: 1}}/>
</Container>
    );
  }



  render(){
    return(
      <Container>
      {this.state.data != null ? this._renderItem() : <Text >Sacrificing to the movie God...</Text>}
  </Container>
    )
  }
  }