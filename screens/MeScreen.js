import React from 'react'
import { View, Text, StyleSheet, H2 } from 'react-native'
import { Container, Header, Content, Card, CardItem, Thumbnail, Button, Icon, Left, Body, Right } from 'native-base'

export default class MeScreen extends React.Component {
	static navigationOptions = {
		title: 'Me'
	}

	render() {
		return (
			<View style={styles.container}>
				<Container>
				<Text>eiei</Text>
				</Container>
			</View>
		)
	}
}
const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		flex: 1,
		backgroundColor: '#fff'
	}
})
