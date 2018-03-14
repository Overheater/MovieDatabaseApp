// THE Main Page of the app, and the main file that holds the navigation system
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  FlatList
} from 'react-native';

import movieService from '../services/movie.service';
import Styles from '../Styles/Styles'
import  { StackNavigator } from 'react-navigation';
import  SearchPage from './SearchPage';
export default class BrowsePage extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          data: null
        }   
      }
    componentDidMount() {
        this._getMovies(); 
      }

    _getMovies() {
        movieService.getMovies()
        .then(results =>{
          this.setState({data: results});
        })
        .catch(error => {
            console.log('Server connection failed');
        })
     }

     _renderMovies() {
        return (<FlatList
          data = {this.state.data}
          keyExtractor = {(item, index) => item.title}
          renderItem={this._renderItem}
        />);
      }

   
render(){
return( 
<View style={Styles.container}>
    <Text style={Styles.title}>
      The Incredible Movie List
    </Text>
    {this.state.data != null ? this._renderMovies() : <Text>We're getting the app ready...</Text>}
</View>   
);
}
}