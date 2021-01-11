import React from 'react';
import {Image, Dimensions, StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import WishlistScreen from '../Screens/Whishlist';

import {COLORS} from '../Configs/constants';

const WishlistStack = createStackNavigator();
const {width} = Dimensions.get('screen');
const ratio = width / 375; //375 is actual image width

export default function WishlistStackScreen() {
  return (
    <WishlistStack.Navigator>
      <WishlistStack.Screen
        name="Whishlist"
        component={WishlistScreen}
        options={{
          title: 'WISHLIST',
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
    </WishlistStack.Navigator>
  );
}

const styles = StyleSheet.create({
  image: {
    width: width,
    height: 102 * ratio, //102 is actual height of image
  },
});
