import React from 'react'
import { View, StyleSheet, Image, H2 } from 'react-native'
import { Container, Header, Content, List, ListItem, Left, Body, Right, H1, Thumbnail, Text } from 'native-base'

export default class MeScreen extends React.Component {
	static navigationOptions = {
		title: 'Me'
	}

	render() {
		return (
			<Container>

				<Content>
					<Text>  </Text>
					<View style={font.Viewcenter}>
						<Image source={require('../pics/User.png')} style={font.size}></Image>
						<H1>User name</H1>
					</View>
					<Text>  </Text>


					<List>
						<ListItem avatar>
							<Left>
								<Text>Lesson 1</Text>
							</Left>
							<Body>
								<Text>  </Text>
								<Text>  </Text>
							</Body>
							<Right>
								<Text note>100 %</Text>
							</Right>
						</ListItem>
					</List>
					<List>
						<ListItem avatar>
							<Left>
								<Text>Lesson 2</Text>
							</Left>
							<Body>
								<Text>  </Text>
								<Text>  </Text>
							</Body>
							<Right>
								<Text note>50 %</Text>
							</Right>
						</ListItem>
					</List>
					<List>
						<ListItem avatar>
							<Left>
								<Text>Lesson 3</Text>
							</Left>
							<Body>
								<Text>  </Text>
								<Text>  </Text>
							</Body>
							<Right>
								<Text note>10 %</Text>
							</Right>
						</ListItem>
					</List>
					<List>
						<ListItem avatar>
							<Left>
								<Text>Lesson 4</Text>
							</Left>
							<Body>
								<Text>  </Text>
								<Text>  </Text>
							</Body>
							<Right>
								<Text note>0 %</Text>
							</Right>
						</ListItem>
					</List>
					<List>
						<ListItem avatar>
							<Left>
								<Text>Lesson 5</Text>
							</Left>
							<Body>
								<Text>  </Text>
								<Text>  </Text>
							</Body>
							<Right>
								<Text note>0 %</Text>
							</Right>
						</ListItem>
					</List>
				</Content>
			</Container>
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
const font = StyleSheet.create({
	Viewcenter: {
		justifyContent: 'center',
		alignItems: 'center',
	},
	size: {
		width: 100,
		height: 100,
	}


})