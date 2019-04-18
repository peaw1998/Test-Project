import React from 'react'
import { ScrollView, StyleSheet } from 'react-native'
import { Container, Header, Content, Card, CardItem, View, Text, Body } from 'native-base'
import { ExpoLinksView } from '@expo/samples'

export default class ExerciseScreen extends React.Component {
	static navigationOptions = {
		title: 'Exercise'
	}

	render() {
		const { navigate } = this.props.navigation
		return (
			<View style={styles.container}>
				<Container>
					<Content padder>
						<Card>
							<CardItem header button onPress={() => navigate('Lesson1')}>
								<Text>Lesson 1</Text>
								<Text note> ประพจน์</Text>
							</CardItem>
						</Card>
						<Card>
							<CardItem header button onPress={() => navigate('Lesson2')}>
								<Text>Lesson 2</Text>
								<Text note> ตรรกศาตร์ภาคแสดง</Text>
							</CardItem>
						</Card>
						<Card>
							<CardItem header button>
								<Text>Lesson 3</Text>
								<Text note> เทคนิคการพิสูจน์</Text>
							</CardItem>
						</Card>
						<Card>
							<CardItem header button>
								<Text>Lesson 4</Text>
								<Text note> เซต</Text>
							</CardItem>
						</Card>
						<Card>
							<CardItem header button>
								<Text>Lesson 5</Text>
								<Text note> ความสัมพันธ์</Text>
							</CardItem>
						</Card>
						<Card>
							<CardItem header button>
								<Text>Lesson 6</Text>
								<Text note> ฟังก์ชัน</Text>
							</CardItem>
						</Card>
						<Card>
							<CardItem header button>
								<Text>Lesson 7</Text>
								<Text note> พื้นฐานการนับ</Text>
							</CardItem>
						</Card>
						<Card>
							<CardItem header button>
								<Text>Lesson 8</Text>
								<Text note> วิธีอุปนัยเชิงคณิตศาสตร์</Text>
							</CardItem>
						</Card>
						<Card>
							<CardItem header button>
								<Text>Lesson 9</Text>
								<Text note> การเรียกตัวเอง</Text>
							</CardItem>
						</Card>
						<Card>
							<CardItem header button>
								<Text>Lesson 10</Text>
								<Text note> การวิเคราะห์บิ๊กโอ</Text>
							</CardItem>
						</Card>
						<Card>
							<CardItem header button>
								<Text>Lesson 11</Text>
								<Text note> ทฤษฎีกราฟ</Text>
							</CardItem>
						</Card>
						<Card>
							<CardItem header button>
								<Text>Lesson 12</Text>
								<Text note> ออโตมาตา</Text>
							</CardItem>
						</Card>
					</Content>
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
