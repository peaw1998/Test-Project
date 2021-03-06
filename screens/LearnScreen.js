import React, { Component } from 'react'
import { Image, StyleSheet, View } from 'react-native'
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base'
import CardSubjectI from '../components/CardSubjectI'
import ContentScreen from './ContentScreen'
import { createStackNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation'

export default class LearnScreen extends React.Component {
	static navigationOptions = {
		title: 'Learn'
	}

	render() {
		const { navigate } = this.props.navigation
		return (
			<Container>
				<Content>
					<Card>
						<CardItem header button onPress={() => navigate('Content')}>
							<Left>
								<Thumbnail source={require('../pics/1.png')} />
								<Body>
									<Text>Discrete Math</Text>
									<Text note>click here to learn</Text>
								</Body>
							</Left>
						</CardItem>
						<CardItem cardBody>
							<Image source={require('../pics/test.jpg')} style={{ height: 200, width: null, flex: 1 }} />
						</CardItem>
					</Card>
					<Card>
						<CardItem header button>
							<Left>
								<Thumbnail source={require('../pics/2.png')} />
								<Body>
									<Text>Algorithms</Text>
									<Text note>click here to learn</Text>
								</Body>
							</Left>
						</CardItem>
						<CardItem cardBody>
							<Image source={require('../pics/2.jpeg')} style={{ height: 200, width: null, flex: 1 }} />
						</CardItem>
					</Card>
				</Content>
			</Container>
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
