import React, { Component } from 'react'
import { Platform, StatusBar, StyleSheet, View, AppRegistry } from 'react-native'
import AppNavigator from './navigation/AppNavigator'

export default class App extends Component {
	render() {
		return <AppNavigator />
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff'
	}
})
