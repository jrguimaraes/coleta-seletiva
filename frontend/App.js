import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BiometricValidation from './BiometricValidation';
import MainApp from './MainApp';
import Form from './screens/Form';
import Login from './screens/Login';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login"
        screenOptions={{
          headerShown: false
        }}>
        <Stack.Screen name="Login" component={ Login }/>
        <Stack.Screen name="BiometricValidation" component={ BiometricValidation } />
        <Stack.Screen name="MainApp" component={ MainApp } />
        <Stack.Screen name="Form" component={ Form } />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;