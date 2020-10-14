import React from 'react';
import {Text} from  'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './src/HomeScreen'
import ImageView from './src/component/ImageView'


const Stack = createStackNavigator();

export default function App(){
    return (
      <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
       <Stack.Screen name="ImageView" component={ImageView} />

      </Stack.Navigator>
    </NavigationContainer>
    );
  }
