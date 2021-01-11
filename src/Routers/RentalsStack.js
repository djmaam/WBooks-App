import React from 'react';
import {Image, Dimensions, StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import RentalsScreen from '../Screens/Rentals';
import {COLORS} from '../Configs/constants';

const RentalsStack = createStackNavigator();
const {width} = Dimensions.get('screen');
const ratio = width / 375; //375 is actual image width

export default function RentalsStackScreen() {
  return (
    <RentalsStack.Navigator>
      <RentalsStack.Screen
        name="Rentals"
        component={RentalsScreen}
        options={{
          title: 'RENTALS',
          headerTintColor: COLORS.WHITE,
          headerBackground: (
            props, // App Logo
          ) => (
            <Image
              style={styles.image}
              source={require('../Assets/General/bc_navbar.png')}
              resizeMode="contain"
            />
          ),
          headerTitleStyle: {flex: 1, textAlign: 'center'},
        }}
      />
    </RentalsStack.Navigator>
  );
}

const styles = StyleSheet.create({
  image: {
    width: width,
    height: 102 * ratio, //102 is actual height of image
  },
});
