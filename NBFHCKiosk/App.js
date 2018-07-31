import React from 'react';
import { createStackNavigator } from 'react-navigation';

import MainMenu from './Pages/MainMenu.js';
import SubMenu1 from './Pages/SubMenu1.js';
import SubMenu2 from './Pages/SubMenu2.js';
import SubMenu3 from './Pages/SubMenu3.js';

export default createStackNavigator({
  MainMenu: {
    screen: MainMenu
  },
  SubMenu1: {
    screen: SubMenu1
  },
  SubMenu2: {
    screen: SubMenu2
  },
  SubMenu3: {
    screen: SubMenu3
  },
});
