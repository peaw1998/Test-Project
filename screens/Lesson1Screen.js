import React, { Component } from 'react'
import { ScrollView, StyleSheet, TouchableOpacity } from 'react-native'
import { Container, Header, Content, Card, CardItem, ScrollableTab, Tab, Tabs, H2, H1, Icon, View, Text, Body, Button, Toast } from 'native-base'
import { ExpoLinksView } from '@expo/samples'

//var count = 0
export default class Lesson1Screen extends React.Component {
    static navigationOptions = {
        title: 'Lesson1'
    }
    state = {
        isResult: false,
        count1: 0,
        count2: 0,
        count3: 0,
        count4: 0,
        No1True: true,
        No1False: true,
        No2True: true,
        No2False: true,
        No3True: true,
        No3False: true,
        No4True: true,
        No4False: true,


    }

    No1T = () => {
        this.setState({
            count1: this.state.count1 + 1,
            No1True: false,
            No1False: true
        })
    }
    No1F = () => {
        this.setState({
            // count: this.state.count - 1,
            No1True: true,
            No1False: false
        })
    }
    No2T = () => {
        this.setState({
            count2: this.state.count2 + 1,
            No2True: false,
            No2False: true
        })
    }
    No2F = () => {
        this.setState({
            // count: this.state.count - 1,
            No2True: true,
            No2False: false
        })
    }
    No3T = () => {
        this.setState({
            count3: this.state.count3 + 1,
            No3True: false,
            No3False: true
        })
    }
    No3F = () => {
        this.setState({
            // count: this.state.count - 1,
            No3True: true,
            No3False: false
        })
    }
    No4T = () => {
        this.setState({
            count4: this.state.count4 + 1,
            No4True: false,
            No4False: true
        })
    }
    No4F = () => {
        this.setState({
            // count: this.state.count - 1,
            No4True: true,
            No4False: false
        })
    }
    resetCount = () => {
        this.setState({ count: 0 })
    }
    showResult = () => {
        this.setState({ isResult: true })
    }

    render() {
        const { navigate } = this.props.navigation
        return (

            <Container>
                <Tabs renderTabBar={() => <ScrollableTab />}>
                    <Tab heading="No.1">
                        <View style={styles.container}>
                            <Container>
                                <H1 style={font.center}>1.ข้อใดต่อไปนี้เป็นประพจน์หรือไม่</H1>
                                <H1> </H1>
                                <H1>    1) 2 + 5 = 7</H1>
                                <Text> </Text>
                                <Button block success onPress={this.No1T} disabled={!this.state.No1True}>
                                    <Icon name='ios-checkmark-circle' />
                                    <Text>เป็น</Text>
                                </Button>
                                <Text> </Text>
                                <Button block danger onPress={this.No1F} disabled={!this.state.No1False}>
                                    <Icon name='ios-close-circle' />
                                    <Text>ไม่เป็น</Text>
                                </Button>
                            </Container>
                        </View>
                    </Tab>
                    <Tab heading="No.2">
                        <View style={styles.container}>
                            <Container>
                                <H1 style={font.center}>1.ข้อใดต่อไปนี้เป็นประพจน์หรือไม่</H1>
                                <H1> </H1>
                                <H2>    2) ไมอามี่เป็นเมืองหลวงของแคนาดา</H2>
                                <Text> </Text>
                                <Button block success onPress={this.No2T} disabled={!this.state.No2True}>
                                    <Icon name='ios-checkmark-circle' />
                                    <Text>เป็น</Text>
                                </Button>
                                <Text> </Text>
                                <Button block danger onPress={this.No2F} disabled={!this.state.No2False}>
                                    <Icon name='ios-close-circle' />
                                    <Text>ไม่เป็น</Text>
                                </Button>
                            </Container>
                        </View>
                    </Tab>
                    <Tab heading="No.3">
                        <View style={styles.container}>
                            <Container>
                                <H1 style={font.center}>1.ข้อใดต่อไปนี้เป็นประพจน์หรือไม่</H1>
                                <H1> </H1>
                                <H1>    3) x + y = 10</H1>
                                <Text> </Text>
                                <Button block success onPress={this.No3T} disabled={!this.state.No3True} >
                                    <Icon name='ios-checkmark-circle' />
                                    <Text>เป็น</Text>
                                </Button>
                                <Text> </Text>
                                <Button block danger onPress={this.No3F} disabled={!this.state.No3False}>
                                    <Icon name='ios-close-circle' />
                                    <Text>ไม่เป็น</Text>
                                </Button>
                            </Container>
                        </View>
                    </Tab>
                    <Tab heading="No.4">
                        <View style={styles.container}>
                            <Container>
                                <H1 style={font.center}>1.ข้อใดต่อไปนี้เป็นประพจน์หรือไม่</H1>
                                <H1> </H1>
                                <H1>    4) จงตอบคำถามต่อไปนี้</H1>
                                <Text> </Text>
                                <Button block success onPress={this.No4T} disabled={!this.state.No4True}>
                                    <Icon name='ios-checkmark-circle' />
                                    <Text>เป็น</Text>
                                </Button>
                                <Text> </Text>
                                <Button block danger onPress={this.No4F} disabled={!this.state.No4False} >
                                    <Icon name='ios-close-circle' />
                                    <Text>ไม่เป็น</Text>
                                </Button>
                                <Text> </Text>



                            </Container>
                        </View>
                    </Tab>
                    <Tab heading="Result">
                        <Text> </Text>
                        <Button block success onPress={this.showResult} >
                            <Icon name='ios-checkmark-circle' />
                            <Text>Result</Text>
                        </Button>

                        {this.state.isResult === true && (
                            <H1 style={font.center}>{this.state.count1+this.state.count2+this.state.count3+this.state.count4}/4</H1>
                        )}
                    </Tab>
                </Tabs>
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
const font = StyleSheet.create({
    center: {
        textAlign: "center"
    }
})
