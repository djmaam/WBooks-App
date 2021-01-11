import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import TabsScreen from './Tabs';
import AuthStackScreen from './AuthStack';

const RootStack = createStackNavigator();

export default function RootStackScreen({user_token}) {
  return (
    <RootStack.Navigator headerMode="none">
      {user_token ? (
        <RootStack.Screen
          name="Main"
          component={TabsScreen}
          options={{
            animationEnabled: false,
          }}
        />
      ) : (
        <RootStack.Screen
          name="Auth"
          component={AuthStackScreen}
          options={{
            animationEnabled: false,
          }}
        />
      )}
    </RootStack.Navigator>
  );
}
