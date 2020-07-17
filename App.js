import React from 'react';
import * as firebase from "firebase";
var firebaseConfig = {
  apiKey: "AIzaSyA952CPYdEn8RD3oBt-Z9rqWyXkch1AHvw",
  authDomain: "crowd-checker-33624.firebaseapp.com",
  databaseURL: "https://crowd-checker-33624.firebaseio.com",
  projectId: "crowd-checker-33624",
  storageBucket: "crowd-checker-33624.appspot.com",
  messagingSenderId: "119320500901",
  appId: "1:119320500901:web:4201b1547647bb03948b4c",
  measurementId: "G-EFBRFTSJSV"
};

import { StyleSheet, Text, View, Image, TouchableHighlight, Button} from 'react-native';
import Simulator from './src/screens/Simulator';
import LoginScreen from './src/screens/LoginScreen';
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

firebase.initializeApp(firebaseConfig);

export default function App({navigation}) {


  const Stack = createStackNavigator();

  const config = {
    animation: 'spring',
    config:{
      stiffness: 1000,
      damping: 500,
      mass: 3,
      overshootClamping: true,
      restDisplacementThresholf: 0.01,
      restSpeeedThreshold: 0.01,
    }
  }


  return (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Login">

    <Stack.Screen 
        name="Login" 
        component={LoginScreen} 
        options={{ headerTitle: () => <CrowdCheckerTitleLogin /> }} 
    />
      

      <Stack.Screen 
        name="SensorSimulator" 
        component={Simulator} 
        options={{ headerTitle: () => <CrowdCheckerTitleLogin2 /> }}
      />
      
    </Stack.Navigator>
  </NavigationContainer>)
}

function CrowdCheckerTitleLogin(){
  return(
    <Text style={{
      left: 75,
      fontSize: 30,
      color: 'green',
      fontFamily: 'sans-serif',
    }}>
      SensorSimulator
    </Text>
  )
}


function CrowdCheckerTitleLogin2(){
  return(
    <Text style={{
      left: 25,
      fontSize: 30,
      color: 'green',
      fontFamily: 'sans-serif',
    }}>
      SensorSimulator
    </Text>
  )
}

