import React from 'react';
import { createAppContainer, createSwitchNavigator ,createStackNavigator} from 'react-navigation';
import TabBarIcon from '../components/TabBarIcon';
import LearnScreen from '../screens/LearnScreen';
import ExerciseScreen from '../screens/ExerciseScreen';
import MeScreen from '../screens/MeScreen';
import ContentScreen from '../screens/ContentScreen';
import MainTabNavigator from './MainTabNavigator';


export default createAppContainer(createSwitchNavigator({

  Main: MainTabNavigator,
 
}));
