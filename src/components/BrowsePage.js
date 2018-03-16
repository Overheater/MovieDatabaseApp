// THE Main Page of the app, and the main file that holds the navigation system
import React, { Component } from 'react';
import {
  Body,
  Button,
  Container,
  Content,
  Footer,
  Card,
  CardItem,
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
import Ionicons from 'react-native-vector-icons/Ionicons';
import movieService from '../services/movie.service';
import Styles from '../Styles/Styles'
import  { TabNavigator,StatusBar,navigationOptions } from 'react-navigation';
import  SearchPage from './SearchPage';
import { Genre } from '../models/Genre';
export default class BrowsePage extends Component {
  static navigationOptions = {
    title: 'Genres',
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

    constructor(props) {
        super(props);
    
        this.state = {
          data: null
        }   
      }
    componentDidMount() {
        this._getGenres(); 
      
      }


    _getGenres() {
        movieService.getGenres()
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

      _renderItem = ({item}) => {
        return (
        <Card>
        <CardItem 
            button
            onPress={()=>this.props.navigation.navigate('MovieSummary',{Genrename : item.getName(), Genre: item.getID()})}
        >
            <Text>{item.getName()}</Text>
            <Right>
                <Icon name="ios-arrow-forward" />
            </Right>
        </CardItem>
    </Card>
        );
      }

   
render(){
return(
  <Container>
    {this.state.data != null ? this._renderMovies() : <Text >Sacrificing to the movie God...</Text>}
</Container>
);
}
}