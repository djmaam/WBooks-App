import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {HeaderBackground} from '../Components/Header';

import AddNewScreen from '../Screens/AddNew';

import {COLORS} from '../Configs/constants';

const AddNewStack = createStackNavigator();

export default function AddNewStackScreen() {
  return (
    <AddNewStack.Navigator>
      <AddNewStack.Screen
        name="Whishlist"
        component={AddNewScreen}
        options={{
          title: 'ADD NEW',
          headerTintColor: COLORS.WHITE,
          headerBackground: (props) => <HeaderBackground />,
          headerTitleStyle: {flex: 1, textAlign: 'center'},
        }}
      />
    </AddNewStack.Navigator>
  );
}
