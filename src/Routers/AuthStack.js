import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import LoginScreen from '../Screens/Login';

const AuthStack = createStackNavigator();

export default function AuthStackScreen() {
  return (
    <AuthStack.Navigator headerMode="none">
      <AuthStack.Screen
        name="Login"
        component={LoginScreen}
        options={{title: 'Sign In'}}
      />
    </AuthStack.Navigator>
  );
}
