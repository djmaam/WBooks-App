import React from 'react';
import {Image, Dimensions, StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import AddNewScreen from '../Screens/AddNew';
import {COLORS} from '../Configs/constants';

const AddNewStack = createStackNavigator();
const {width} = Dimensions.get('screen');
const ratio = width / 375; //375 is actual image width

export default function AddNewStackScreen() {
  return (
    <AddNewStack.Navigator>
      <AddNewStack.Screen
        name="Whishlist"
        component={AddNewScreen}
        options={{
          title: 'ADD NEW',
          headerTintColor: COLORS.WHITE,
          headerBackground: (props) => (
            <Image
              style={styles.image}
              source={require('../Assets/General/bc_navbar.png')}
              resizeMode="contain"
            />
          ),
          headerTitleStyle: {flex: 1, textAlign: 'center'},
        }}
      />
    </AddNewStack.Navigator>
  );
}

const styles = StyleSheet.create({
  image: {
    width: width,
    height: 102 * ratio, //102 is actual height of image
  },
});
