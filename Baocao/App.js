/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import LoginScreen from './components/Login'
import HomeScreen from './components/Home'
import SignupScreen from './components/Signup' 

export default class App extends Component  {
  deleteItemById = id =>{
    
    const filteredData = this.state.data.filter(item => item.id !== id);
    this.setState({data: filteredData})
  }
  render(){
    return <AppContainer />;
    
  }
};
const AppNavigator = createStackNavigator({
  Login:{
    screen: LoginScreen,
    navigationOptions: () => ({
      title: "Login",
      headerStyle: { backgroundColor: 'red', },
      headerTitleStyle: { color: 'yellow',flex:1,textAlign:"center" },
    }),
  },
  Home:{
    screen: HomeScreen,
    navigationOptions: ()=>({
      title:"MyApp",
      headerStyle: { backgroundColor: 'red', },
      headerTitleStyle: { color: 'yellow',flex:1,textAlign:"center" },
    })
  },
  Signup:{
    screen: SignupScreen,
    navigationOptions: ()=>({
      title:"MyApp",
      headerStyle: { backgroundColor: 'red', },
      headerTitleStyle: { color: 'yellow',flex:1,textAlign:"center" },
    })
  },
 
});
const AppContainer = createAppContainer(AppNavigator);

