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
  Image,
} from 'react-native';

import movieService from '../services/movie.service';
import Styles from '../Styles/Styles'
import  { StackNavigator } from 'react-navigation';

export default class MovieSummary extends React.Component {


// renders each Movie info
constructor(props) {
  super(props);
  this.state = {
    data: null,
    loadmore: false
  }   
  Gtitle = this.props.navigation.state.params.Genrename;
  Gid = this.props.navigation.state.params.Genre;
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
  //YOU HAVE TO CHANGE THIS IF YOU WANT IT TO BE DYNAMIC
  //CURRENTLY SET TO ACTION (28)
  //VVVVVVVVVVVVVVVVVVVVVVVVVVV
  movieService.getGenreMovies(Gid)
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
           onPress={()=>this.props.navigation.navigate('MovieDetail',{ID:item.getID()})}
      >
     <Left>
     <Body>
    <Text style={Styles.welcome}>{item.getTitle()} </Text>
    <Text note style={Styles.note}>{item.getReleaseDate()}</Text>
     </Body>
    </Left>
    </CardItem>
  <CardItem CardBody
      button
      onPress={()=>this.props.navigation.navigate('MovieDetail',{ID:item.getID()})}
  >
      
        <Image source={{uri: item.getPoster()}}
      ResizeMethod="resize"
      style={{height: 300, width: null, flex: 1}}/>
  </CardItem>
  <CardItem
        button
        onPress={()=>this.props.navigation.navigate('MovieDetail',{ID:item.getID()})}
  >
  <Text style={Styles.textcenter}>popularity: {item.getPop()} </Text>
    </CardItem>
    <CardItem
          button
          onPress={()=>this.props.navigation.navigate('MovieDetail',{ID:item.getID()})}
    >
  <Text style={Styles.textcenter}> {item.getoverviewsub()} ... </Text>
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