import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {HeaderBackground} from '../Components/Header';

import RentalsScreen from '../Screens/Rentals';

import {COLORS} from '../Configs/constants';

const RentalsStack = createStackNavigator();

export default function RentalsStackScreen() {
  return (
    <RentalsStack.Navigator>
      <RentalsStack.Screen
        name="Rentals"
        component={RentalsScreen}
        options={{
          title: 'RENTALS',
          headerTintColor: COLORS.WHITE,
          headerBackground: (props) => <HeaderBackground />,
          headerTitleStyle: {flex: 1, textAlign: 'center'},
        }}
      />
    </RentalsStack.Navigator>
  );
}
