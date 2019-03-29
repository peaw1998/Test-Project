import React from 'react';
import { View, Text, StyleSheet,H2 } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail , Button, Icon, Left, Body, Right } from 'native-base';

class Profile extends React.Component {
  render() {
      return (
          
          <Container>
              <Content >
                  <Text> </Text>
                  <Text> </Text>
                  <H2>  Name</H2>
                  <Text> </Text>
                 

             
              </Content> 
          </Container>
         

      );
  }
}
export default class MeScreen extends React.Component {
  static navigationOptions = {
    title: 'Me',
  };

  render() {
    return (


      <View style={styles.container}>
     <Profile/>
    </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#fff',
  },
});