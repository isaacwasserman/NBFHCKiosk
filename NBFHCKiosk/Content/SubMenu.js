import React from 'react';
import { View, Text, StyleSheet, Button, FlatList, ImageBackground, Image, TouchableOpacity } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import autoBind from 'react-autobind';

import FastImageBackground from './Components/FastImageBackground';
import * as Animatable from 'react-native-animatable';


import SubMenuItem from './Components/SubMenuItem';

export default class SubMenu extends React.Component {

  constructor(props){
    super(props);
    autoBind(this);
  }

  componentWillMount(){
    var title = this.props.navigation.getParam('title', null);
    var data = this.props.navigation.getParam('SubMenu', null);
    this.setState({title: title, SubMenuData: data});
  }

  state = {
    backgroundShadowFile: require('./Images/BackgroundShadow.png'),
    backgroundImageFile: require('./Images/Placeholders/Background.jpg'),
    SubMenuData: '',
    ListRerender: false,
    FeatureDisplay: 'none',
    FeatureAnimation: '',
    FeatureData: {
      title: 'title',
    }
  }

  Focus(FeatureData){
    var SubMenuData = this.state.SubMenuData;
    for(item of SubMenuData){
        item.animation = 'fadeOutUp';
    }
    this.setState({ListRerender: true, FeatureData: FeatureData, FeatureDisplay: 'flex', FeatureAnimation: 'fadeInLeft'});
    console.log(FeatureData);
  }

  Blur(){
    var SubMenuData = this.state.SubMenuData;
    for(item of SubMenuData){
        item.animation = 'fadeInDown';
    }
    this.setState({ListRerender: true, FeatureAnimation: 'fadeOutLeft'});
  }

  static navigationOptions = {
    title: '',
    header: null,
  }

  render() {
    return (
      <FastImageBackground source={this.state.backgroundImageFile} style={SubMenuStyles.BackgroundImage}>
        <FastImageBackground source={this.state.backgroundShadowFile} style={SubMenuStyles.BackgroundShadow}>
          <View style={SubMenuStyles.Title}>
            <Text style={SubMenuStyles.TitleText}>{this.state.title}</Text>
          </View>
          <Animatable.View style={[SubMenuStyles.Feature, {display: this.state.FeatureDisplay}]} animation={this.state.FeatureAnimation}>
            <TouchableOpacity onPress={this.Blur}><View style={SubMenuStyles.FeatureExit}></View></TouchableOpacity>
            <Image style={SubMenuStyles.FeatureImage}/>
            <Text style={SubMenuStyles.FeatureTitle}>{this.state.FeatureData.title}</Text>
          </Animatable.View>
          <FlatList contentContainerStyle={SubMenuStyles.ItemContainer} extraData={this.state} numColumns={3} data={this.state.SubMenuData} keyExtractor={(item, index) => item.title} renderItem={({item}) => <SubMenuItem data={item} parent={this}/>}/>
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
  },

  Title: {
    flexDirection: 'column'
  },

  TitleText: {
    color: '#e1e1aa',
    fontSize: 80,
    fontWeight: 'bold',
    fontFamily: 'Avenir Next',
    marginTop: 80,
    alignSelf: 'flex-start',
    marginLeft: 100,
    textTransform: 'uppercase',
    letterSpacing: 5
  },

  ItemContainer: {
    alignSelf: 'center'
  },

  Feature: {
  },

  FeatureTitle: {
    fontSize: 40,
    color: 'white'
  },

  FeatureExit: {
    height: 20,
    width: 20,
    backgroundColor: 'red'
  }
});
