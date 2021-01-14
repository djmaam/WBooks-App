import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {HeaderBackground} from '../Components/Header';

import SettingsScreen from '../Screens/Settings';

import {COLORS} from '../Configs/constants';

const SettingsStack = createStackNavigator();

export default function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          title: 'SETTINGS',
          headerTintColor: COLORS.WHITE,
          headerBackground: (props) => <HeaderBackground />,
          headerTitleStyle: {
            flex: 1,
            textAlign: 'center',
            fontFamily: 'Montserrat-Regular',
          },
        }}
      />
    </SettingsStack.Navigator>
  );
}
