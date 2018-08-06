import React from 'react';
import { View, Text, StyleSheet, Button, FlatList, ImageBackground } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import autoBind from 'react-autobind';

import FastImageBackground from './Components/FastImageBackground';

export default class SubMenu extends React.Component {

  constructor(props){
    super(props);
    autoBind(this);
  }

  componentWillMount(){
    var data = this.props.navigation.getParam('SubMenu', null);
    this.setState({SubMenuData: data});
  }

  state = {
    backgroundShadowFile: require('./Images/BackgroundShadow.png'),
    backgroundImageFile: require('./Images/Placeholders/Background.jpg'),
    SubMenuData: ''
  }

  static navigationOptions = {
    title: '',
    header: null
  }

  render() {
    return (
      <FastImageBackground source={this.state.backgroundImageFile} style={SubMenuStyles.BackgroundImage}>
        <FastImageBackground source={this.state.backgroundShadowFile} style={SubMenuStyles.BackgroundShadow}>
          <FlatList data={this.state.SubMenuData} keyExtractor={(item, index) => item.title} renderItem={({item}) => <Text>{item.title}</Text>}/>
        </FastImageBackground>
      </FastImageBackground>
    );
  }
}

const SubMenuStyles = StyleSheet.create({
  BackgroundImage: {
    width: '100%',
    height: '100%'
  },

  BackgroundShadow: {
    width: '100%',
    height: '100%'
  }
});
