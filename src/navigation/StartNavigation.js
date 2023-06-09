import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import SignIn from '../screens/Signin';
import Signup from '../screens/Signup';
import Welcome from '../screens/Welcome';
import Verification from '../screens/Verification';
import Todo from '../screens/Todo';

const Stack = createNativeStackNavigator();

const StartNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerStyle: {
        backgroundColor: 'black',
        color: '#fff'
    }, headerTintColor: '#fff'}}>

        <Stack.Screen name="Welcome" component={Welcome} options={{
        headerShown: false
      }} />
        <Stack.Screen name="Login" component={SignIn} />
        <Stack.Screen name="SignUp" component={Signup} />
        <Stack.Screen name="Verification" component={Verification} />
        <Stack.Screen name="Tasks" component={Todo} />

    </Stack.Navigator>
  )
}

export default StartNavigation

const styles = StyleSheet.create({})