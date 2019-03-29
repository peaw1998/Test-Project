import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator,createAppContainer } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import LearnScreen from '../screens/LearnScreen';
import ExerciseScreen from '../screens/ExerciseScreen';
import MeScreen from '../screens/MeScreen';
import ContentScreen from '../screens/ContentScreen';

export const LearnStack = createStackNavigator({
  Learn: {
    screen: LearnScreen,
    navigationOptions: {
      title: 'Learn',
    },
  },
 
  
});
LearnStack.navigationOptions = {

  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-book' : 'md-book'}
    />
  )};

  

// const LearnStack = createStackNavigator({
//   Learn: LearnScreen,
// });

// LearnStack.navigationOptions = {
//   tabBarLabel: 'LEARN',
//   tabBarIcon: ({ focused }) => (
//     <TabBarIcon
//       focused={focused}
//       name={Platform.OS === 'ios' ? 'ios-book' : 'md-book'}
//     />
//   ),
// };
export const ExerciseStack = createStackNavigator({
  Exercise: {
    screen: ExerciseScreen,
    
  },
});
ExerciseStack.navigationOptions =  {
  title: 'EXERCISE',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
  focused={focused}
  name={Platform.OS === 'ios' ? 'ios-create' : 'md-create'}
/>
)};
// const ExerciseStack = createStackNavigator({
//   Exercise: ExerciseScreen,
// });

// ExerciseStack.navigationOptions = {
//   tabBarLabel: 'EXERCISE',
//   tabBarIcon: ({ focused }) => (
//     <TabBarIcon
//       focused={focused}
//       name={Platform.OS === 'ios' ? 'ios-create' : 'md-create'}
//     />
//   ),
// };
export const MeStack = createStackNavigator({
  Me: {
    screen: MeScreen,
  },
});
MeStack.navigationOptions = {
   title: 'ME',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
  focused={focused}
  name={Platform.OS === 'ios' ? 'ios-contact' : 'md-contact'}
/>

)};
// const MeStack = createStackNavigator({
//   Me: MeScreen,
// });

// MeStack.navigationOptions = {
//   tabBarLabel: 'ME',
//   tabBarIcon: ({ focused }) => (
//     <TabBarIcon
//       focused={focused}
//       name={Platform.OS === 'ios' ? 'ios-contact' : 'md-contact'}
//     />

//   ),
// };

// const MainLearnStack = createStackNavigator(
//   {
//     Learn: LearnScreen,
//     Content: ContentScreen,
//   },
//   {
//     initialRouteName: 'Learn',
//   }
// );
// MainLearnStack.navigationOptions = {

//   tabBarIcon: ({ focused }) => (
//     <TabBarIcon
//       focused={focused}
//       name={Platform.OS === 'ios' ? 'ios-book' : 'md-book'}
//     />
//   )};

// const LearnSc = createAppContainer(MainLearnStack);


export default createBottomTabNavigator({
  Learn : LearnStack,
  Exercise : ExerciseStack,
  Me : MeStack,

});
