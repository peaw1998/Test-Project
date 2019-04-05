import React from 'react'
import { ScrollView, StyleSheet } from 'react-native'
import { Container, Header, Content, Card, CardItem, H1,Icon, View, Text, Body, Button } from 'native-base'
import { ExpoLinksView } from '@expo/samples'

export default class Lesson1Screen extends React.Component {
	static navigationOptions = {
		title: 'Lesson1'
	}

	render() {
		const { navigate } = this.props.navigation
		return (
			<View style={styles.container}>
				<Container>
					<H1 style={font.center}>1.ข้อใดต่อไปนี้เป็นประพจน์หรือไม่</H1>
					<Button iconLeft transparent primary>
						<Icon name='ios-checkmark-circle' />
						<Text>เป็น</Text>
					</Button>
					<Button iconLeft transparent primary>
						<Icon name='ios-close-circle' />
						<Text>ไม่เป็น</Text>
					</Button>



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
