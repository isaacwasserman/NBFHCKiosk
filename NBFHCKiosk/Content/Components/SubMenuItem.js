import React from 'react';
import { View, Text, StyleSheet, Button, ImageBackground } from 'react-native';

import autoBind from 'react-autobind';

import * as Animatable from 'react-native-animatable';

import SOCButton from './SOCButton';
import FastImageBackground from './FastImageBackground'

export default class SubMenuItem extends React.Component {
  constructor(){
    super();
    autoBind(this);
    this.AnimatableRef = React.createRef();
  }

  componentWillMount(){
    var ItemData = this.props.data;
    this.setState({ItemData: ItemData});
  }

  state = {
    ItemData: '',
    ComponentAnimation: ''
  }

  Pressed(data){
    console.log('pressed');
    var parent = this.props.parent;
    parent.Focus(this.state.ItemData);
  }

  SelfFocus(){

  }

  SelfHide(){
    this.setState({ComponentAnimation: 'fadeOutUp'});
  }

  render() {
    return (
      <Animatable.View animation={this.state.ItemData.animation}>
        <SOCButton onPress={this.Pressed}>
          <ImageBackground style={[SubMenuItemStyles.Container, this.props.style]} source={this.state.ItemData.itemImage}>
          </ImageBackground>
        </SOCButton>
      </Animatable.View>
    );
  }
}

const SubMenuItemStyles = StyleSheet.create({
  Container: {
    height: 300,
    width: 300,
    backgroundColor: 'white',
    margin: 30
  },
});
