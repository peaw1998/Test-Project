import React from 'react'
import { createAppContainer, createSwitchNavigator, createStackNavigator } from 'react-navigation'
import LearnScreen from '../screens/LearnScreen'
import ContentScreen from '../screens/ContentScreen'
import MainTabNavigator from './MainTabNavigator'



export default createAppContainer(
	createSwitchNavigator({
		Main: MainTabNavigator,
		
	})
)
