import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {HeaderBackground} from '../Components/Header';

import AddNewScreen from '../Screens/AddNew';

import {COLORS} from '../Configs/constants';

import I18n from '../Utils/I18n';

const AddNewStack = createStackNavigator();

export default function AddNewStackScreen() {
  return (
    <AddNewStack.Navigator>
      <AddNewStack.Screen
        name="AddNew"
        component={AddNewScreen}
        options={{
          title: `${I18n.t('add_new')}`,
          headerTintColor: COLORS.WHITE,
          headerBackground: (props) => <HeaderBackground />,
          headerTitleStyle: {
            flex: 1,
            textAlign: 'center',
            fontFamily: 'Montserrat-Regular',
          },
        }}
      />
    </AddNewStack.Navigator>
  );
}
