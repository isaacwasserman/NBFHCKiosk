import React from 'react';
import { createStackNavigator } from 'react-navigation';

import MainMenu from './Content/MainMenu.js';
import SubMenu from './Content/SubMenu.js';

export default createStackNavigator({
    MainMenu: {
      screen: MainMenu
    },
    SubMenu: {
      screen: SubMenu
    }
  },
  {
    headerMode: 'screen'
  }
);
