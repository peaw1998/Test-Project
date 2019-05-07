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
        answer : [],
        result : 0,
        count : 0,
        statusSM1 : false ,
        statusSM2 : false ,
        statusSM3 : false ,
        statusSM4 : false ,
    


    }

    resetCount = () => {
        this.setState({ count: 0 })
    }
    showResult = () => {
        
        if(this.state.statusSM1&&this.state.statusSM2&&this.state.statusSM3&&this.state.statusSM4){
            this.setState({ isResult: true })
        }else{
            alert("กรุณายืนยันคำตอบ")
        }
        
    }
    onPressInChoice = (event) =>{
        let clicked 
        if(event === 'No1T'){
                this.setState({
                    answer: this.state.answer + '1',
                    No1True: false,
                    No1False: true
                },()=>{
                    let index =this.state.answer.length
                    this.setState({
                        count1 : +this.state.answer[index-1]
                    })
                })
                
            
        }else if(event === 'No1F'){
            
                this.setState({
                    answer: this.state.answer + '0',
                    No1True: true,  
                    No1False: false
                },()=>{
                    let index =this.state.answer.length
                    this.setState({
                        count1 :+this.state.answer[index-1]
                    })
                })
                
                
            
        }else if(event === 'No2T'){
            this.setState({
                answer: this.state.answer + '1',
                No2True: false,
                No2False: true
            },()=>{
                let index =this.state.answer.length
                this.setState({
                    count2 : +this.state.answer[index-1]
                })
            })
        }else if(event === 'No2F'){
            this.setState({
                answer: this.state.answer + '0',
                No2True: true,  
                No2False: false
            },()=>{
                let index =this.state.answer.length
                this.setState({
                    count2 :+this.state.answer[index-1]
                })
            })
        }else if(event === 'No3T'){
            this.setState({
                answer: this.state.answer + '0',
                No3True: false,
                No3False: true
            },()=>{
                let index =this.state.answer.length
                this.setState({
                    count3 : +this.state.answer[index-1]
                })
            })
        }else if(event === 'No3F'){
            this.setState({
                answer: this.state.answer + '1',
                No3True: true,  
                No3False: false
            },()=>{
                let index =this.state.answer.length
                this.setState({
                    count3 :+this.state.answer[index-1]
                })
            })
        }else if(event === 'No4T'){
            this.setState({
                answer: this.state.answer + '0',
                No4True: false,
                No4False: true
            },()=>{
                let index =this.state.answer.length
                this.setState({
                    count4 : +this.state.answer[index-1]
                })
            })
        }else if(event === 'No4F'){
            this.setState({
                answer: this.state.answer + '1',
                No4True: true,  
                No4False: false
            },()=>{
                let index =this.state.answer.length
                this.setState({
                    count4 :+this.state.answer[index-1]
                })
            })
        }
        
        
        
    }
    submit = (event) =>{
        if(event === 'sm1'){
            this.setState({
                No1True: false,
                No1False: false,
                statusSM1 : true,
            })
        }else if(event === 'sm2'){
            this.setState({
                No2True: false,
                No2False: false,
                statusSM2 : true,
            })
        }else if(event === 'sm3'){
            this.setState({
                No3True: false,
                No3False: false,
                statusSM3 : true,
            })
        }else if(event === 'sm4'){
            this.setState({
                No4True: false,
                No4False: false,
                statusSM4 : true,
            })
        }
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
                                <Button block success onPress={()=>this.onPressInChoice('No1T')} disabled={!this.state.No1True}>
                                    <Icon name='ios-checkmark-circle' />
                                    <Text>เป็น</Text>
                                </Button>
                                <Text> </Text>
                                <Button block danger onPress={()=>this.onPressInChoice('No1F')}  disabled={!this.state.No1False}>
                                    <Icon name='ios-close-circle' />
                                    <Text>ไม่เป็น</Text>
                                </Button>
                                <Text> </Text>
                                <Button block Primary onPress={()=>this.submit('sm1')} >
                                    <Text>ยืนยัน</Text>
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
                                <Button block success onPress={()=>this.onPressInChoice('No2T')}  disabled={!this.state.No2True}>
                                    <Icon name='ios-checkmark-circle' />
                                    <Text>เป็น</Text>
                                </Button>
                                <Text> </Text>
                                <Button block danger onPress={()=>this.onPressInChoice('No2F')}  disabled={!this.state.No2False}>
                                    <Icon name='ios-close-circle' />
                                    <Text>ไม่เป็น</Text>
                                </Button>
                                <Text> </Text>
                                <Button block Primary onPress={()=>this.submit('sm2')} >
                                    <Text>ยืนยัน</Text>
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
                                <Button block success onPress={()=>this.onPressInChoice('No3T')}  disabled={!this.state.No3True} >
                                    <Icon name='ios-checkmark-circle' />
                                    <Text>เป็น</Text>
                                </Button>
                                <Text> </Text>
                                <Button block danger onPress={()=>this.onPressInChoice('No3F')}  disabled={!this.state.No3False}>
                                    <Icon name='ios-close-circle' />
                                    <Text>ไม่เป็น</Text>
                                </Button>
                                <Text> </Text>
                                <Button block Primary onPress={()=>this.submit('sm3')} >
                                    <Text>ยืนยัน</Text>
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
                                <Button block success onPress={()=>this.onPressInChoice('No4T')}  disabled={!this.state.No4True}>
                                    <Icon name='ios-checkmark-circle' />
                                    <Text>เป็น</Text>
                                </Button>
                                <Text> </Text>
                                <Button block danger onPress={()=>this.onPressInChoice('No4F')}  disabled={!this.state.No4False} >
                                    <Icon name='ios-close-circle' />
                                    <Text>ไม่เป็น</Text>
                                </Button>
                                <Text> </Text>
                                <Button block Primary onPress={()=>this.submit('sm4')} >
                                    <Text>ยืนยัน</Text>
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