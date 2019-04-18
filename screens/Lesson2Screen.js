import React, { Component } from 'react'
import { ScrollView, StyleSheet } from 'react-native'
import { Container, Header, Content, Card, CardItem, H1, Icon, View, Text, Body, Button, Toast } from 'native-base'
import { ExpoLinksView } from '@expo/samples'

export default class Lesson2Screen extends React.Component {
	static navigationOptions = {
		title: 'Lesson2'
	}
	
	render() {
		const { navigate } = this.props.navigation
		return (
			<View style={styles.container}>
				<Container>
					<H1 style={font.center}>1.ข้อใดต่อไปนี้เป็นประพจน์หรือไม่</H1>
					<H1> </H1>
					<H1>    1) 2 + 5 = 7</H1>
					<Text> </Text>
					<Button block success  >
						<Icon name='ios-checkmark-circle' />
						<Text>เป็น</Text>
					</Button>
					<Text> </Text>
					<Button block danger>
						<Icon name='ios-close-circle' />
						<Text>ไม่เป็น</Text>
					</Button>
					<Text> </Text>
					


				</Container>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 15,
		backgroundColor: '#fff'
	}
})
const font = StyleSheet.create({
	center: {
		textAlign: "center"
	}
})
