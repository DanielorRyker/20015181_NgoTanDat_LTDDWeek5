import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Home';
import SignUp from './SignUp';
import Login from './Login';
import Product from './Product';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer 
      initialRouteName="Home"
     
    >
      <Stack.Navigator >
        <Stack.Screen name="Home" component={Home}  options={{headerShown: false}}/>
        <Stack.Screen name="SignUp" component={SignUp}  options={{headerShown: false}}/>
       <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/> 
        <Stack.Screen name="Product" component={Product}  options={{headerShown: false}}/>
      </Stack.Navigator>

    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
