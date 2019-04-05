import React from 'react'
import { Platform } from 'react-native'
import { createStackNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation'
import TabBarIcon from '../components/TabBarIcon'
import LearnScreen from '../screens/LearnScreen'
import ExerciseScreen from '../screens/ExerciseScreen'
import MeScreen from '../screens/MeScreen'
import ContentScreen from '../screens/ContentScreen'
import Lesson1Screen from '../screens/Lesson1Screen'

export const LearnStack = createStackNavigator({
	Learn: {
		screen: LearnScreen
	},
	Content: {
		screen: ContentScreen
	}
})
LearnStack.navigationOptions = {
	tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-book' : 'md-book'} />
}

// ------------------------------------------------------------------------------------------

export const ExerciseStack = createStackNavigator({
	Exercise: {
		screen: ExerciseScreen
	},
	Lesson1: {
		screen: Lesson1Screen
	}
})
ExerciseStack.navigationOptions = {
	tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-create' : 'md-create'} />
}

// ------------------------------------------------------------------------------------------

export const MeStack = createStackNavigator({
	Me: {
		screen: MeScreen
	}
})
MeStack.navigationOptions = {
	tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-contact' : 'md-contact'} />
}

// ------------------------------------------------------------------------------------------

export default createBottomTabNavigator({
	Learn: LearnStack,
	Exercise: ExerciseStack,
	Me: MeStack
})
