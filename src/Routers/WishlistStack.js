import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {HeaderBackground} from '../Components/Header';

import WishlistScreen from '../Screens/Whishlist';

import {COLORS} from '../Configs/constants';

import I18n from '../Utils/I18n';

const WishlistStack = createStackNavigator();

export default function WishlistStackScreen() {
  return (
    <WishlistStack.Navigator>
      <WishlistStack.Screen
        name="Whishlist"
        component={WishlistScreen}
        options={{
          title: `${I18n.t('wishlist')}`,
          headerTintColor: COLORS.WHITE,
          headerBackground: (props) => <HeaderBackground />,
          headerTitleStyle: {
            flex: 1,
            textAlign: 'center',
            fontFamily: 'Montserrat-Regular',
          },
        }}
      />
    </WishlistStack.Navigator>
  );
}
