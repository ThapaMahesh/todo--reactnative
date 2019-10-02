import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';

import HomeScreen from './home';
import InCompleteScreen from './incomplete';

import {
  Icon,
} from  'native-base';

const MainNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      // navigationOptions: {
      //   tabBarLabel: 'Home',
      //   tabBarIcon: ({ tintColor }) => (
      //           <Icon name="home" style={{color:tintColor}} size={30} color={tintColor} />
      //   ),
      //   tabBarOptions: { 
      //     activeTintColor:'yellow',
      //     inactiveTintColor: '#69f0ae',
      //     animationEnabled: true
      //   }
      // }
    },
    // Incomplete: {
    //   screen: InCompleteScreen,
    //   navigationOptions: {
    //     tabBarLabel: 'Incomplete',
    //     tabBarIcon: ({ tintColor }) => (
    //             <Icon name="list" style={{color:tintColor}} size={30} color={tintColor} />
    //     ),
    //     tabBarOptions: { 
    //       activeTintColor:'yellow',
    //       inactiveTintColor: '#69f0ae',
    //       animationEnabled: true
    //     }
    //   }
    // },
    // Complete: {
    //   screen: InCompleteScreen,
    //   navigationOptions: {
    //     tabBarLabel: 'Complete',
    //     tabBarIcon: ({ tintColor }) => (
    //             <Icon name="checkmark-circle" style={{color:tintColor}} size={30} color={tintColor} />
    //     ),
    //     tabBarOptions: { 
    //       activeTintColor:'yellow',
    //       inactiveTintColor: '#69f0ae',
    //       animationEnabled: true
    //     }
    //   }
    // },
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions : {
      headerStyle: {
        backgroundColor: '#b9c1fb',
      },
      // headerTintColor: '#e3e3e',
      headerTitleStyle: {
        fontWeight: 'bold',
        fontFamily: 'sans-serif'
      },
    }
  }
);

const App = createAppContainer(MainNavigator);

export default App;