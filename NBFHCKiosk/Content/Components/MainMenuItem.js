import React from 'react';
import { View, Text, StyleSheet, Button, ImageBackground } from 'react-native';

import autoBind from 'react-autobind';

import SOCButton from './SOCButton';
import FastImageBackground from './FastImageBackground'

export default class MainMenuItem extends React.Component {
  constructor(){
    super();
    autoBind(this);
  }

  GoToSubmenu(data){
    var ParentNavigation = this.props.ParentNavigation;
    console.log('going?');
    ParentNavigation.navigate('SubMenu', this.props.data);
  }

  state = {
  }

  render() {
    return (
      <View style={MainMenuItemStyles.Container}>
        <SOCButton onPress={this.GoToSubmenu}>
          <FastImageBackground source={this.props.data.imageFile} style={MainMenuItemStyles.BackgroundImage}>
            <View style={MainMenuItemStyles.InfoBar}>
              <Text style={MainMenuItemStyles.InfoBarText}>{this.props.data.title}</Text>
            </View>
          </FastImageBackground>
        </SOCButton>
      </View>
    );
  }
}

const MainMenuItemStyles = StyleSheet.create({
  Container: {
    height: 240,
    width: 581,
    marginBottom: 10
  },

  BackgroundImage: {
    width: '100%',
    height: '100%'
  },

  InfoBar: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    position: 'absolute',
    bottom: 0
  },

  InfoBarText: {
    color: 'white',
    fontFamily: 'Avenir Next',
    fontWeight: '700',
    fontSize: 24,
    textTransform: 'uppercase',
    paddingVertical: 5,
    paddingHorizontal: 10
  }
});
