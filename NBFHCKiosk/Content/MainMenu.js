import React from 'react';
import { View, Text, StyleSheet, Button, ImageBackground, FlatList } from 'react-native';

import autoBind from 'react-autobind';

import FastImageBackground from './Components/FastImageBackground'

import MainMenuItem from './Components/MainMenuItem'

export default class MainMenu extends React.Component {

  static navigationOptions = {
    title: 'Title',
    header: null
  }

  constructor(){
    super();
    autoBind(this);
  }

  state = {
    backgroundShadowFile: require('./Images/BackgroundShadow.png'),
    backgroundImageFile: require('./Images/Placeholders/Background.jpg'),
    categories: [
      {
        title: 'learning the trade',
        imageFile: require('./Images/Placeholders/MainMenuItems/MainMenuItem1.jpg'),
        SubMenu: [{
          title: 'person1',
          itemImage: {uri: 'https://picsum.photos/300?random'}
        },
        {
          title: 'person2',
          itemImage: {uri: 'https://picsum.photos/300?random'}
        },
        {
          title: 'person3',
          itemImage: {uri: 'https://picsum.photos/300?random'}
        },
        {
          title: 'person4',
          itemImage: {uri: 'https://picsum.photos/300?random'}
        },
        {
          title: 'person5',
          itemImage: {uri: 'https://picsum.photos/300?random'}
        },
        {
          title: 'person6',
          itemImage: {uri: 'https://picsum.photos/300?random'}
        }]
      },
      {
        title: 'a typical day',
        imageFile: require('./Images/Placeholders/MainMenuItems/MainMenuItem2.jpg'),
        SubMenu: [{title: 'person1'}, {title: 'person2'}, {title: 'person3'}, {title: 'person4'}, {title: 'person5'}, {title: 'person6'}]
      },
      {
        title: 'family business',
        imageFile: require('./Images/Placeholders/MainMenuItems/MainMenuItem3.jpg'),
        SubMenu: [{title: 'person1'}, {title: 'person2'}, {title: 'person3'}, {title: 'person4'}, {title: 'person5'}, {title: 'person6'}]
      }
    ]
  }

  render() {
    return (
      <FastImageBackground source={this.state.backgroundImageFile} style={MainMenuStyles.BackgroundImage}>
        <FastImageBackground source={this.state.backgroundShadowFile} style={MainMenuStyles.BackgroundShadow}>
          <View style={MainMenuStyles.Title}>
            <Text style={MainMenuStyles.TitleText}>VOICES of EXPERIENCE</Text>
            <Text style={MainMenuStyles.SubtitleText}>an interactive oral history</Text>
          </View>
          <FlatList contentContainerStyle={MainMenuStyles.MenuItems} data={this.state.categories} keyExtractor={(item, index) => item.title} renderItem={({item}) => <MainMenuItem data={item} ParentNavigation={this.props.navigation}/>}/>
        </FastImageBackground>
      </FastImageBackground>
    );
  }
}

const MainMenuStyles = StyleSheet.create({
  BackgroundImage: {
    width: '100%',
    height: '100%'
  },

  BackgroundShadow: {
    width: '100%',
    height: '100%'
  },

  Title: {
    flexDirection: 'column',
    width: '75%',
    alignSelf: 'center'
  },

  TitleText: {
    color: '#e1e1aa',
    fontSize: 80,
    fontWeight: 'bold',
    fontFamily: 'Avenir Next',
    marginTop: 30,
    alignSelf: 'center',
    marginBottom: -25,
    letterSpacing: 5
  },

  SubtitleText: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
    fontFamily: 'Avenir Next',
    alignSelf: 'flex-end',
    marginRight: 10
  },

  MenuItems: {
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: 40
  },

  MenuItem: {
    height: 287,
    margin: 10
  }
});
