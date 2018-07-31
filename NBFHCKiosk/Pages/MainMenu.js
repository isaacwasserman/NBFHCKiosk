import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { createStackNavigator } from 'react-navigation';

export default class MainMenu extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Main Menu</Text>
          <Button title="Go to SubMenu1" onPress={() => this.props.navigation.navigate('SubMenu1')} />
          <Button title="Go to SubMenu2" onPress={() => this.props.navigation.navigate('SubMenu2')} />
          <Button title="Go to SubMenu3" onPress={() => this.props.navigation.navigate('SubMenu3')} />
      </View>
    );
  }
}
