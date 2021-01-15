import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {
  LibraryIcon,
  LibraryActiveIcon,
  WishlistIcon,
  WishlistActiveIcon,
  AddNewIcon,
  AddNewActiveIcon,
  RentalsIcon,
  RentalsActiveIcon,
  SettingsIcon,
  SettingsActiveIcon,
} from '../Components/Tabs';

import LibraryStackScreen from './HomeStack';
import WishlistStackScreen from './WishlistStack';
import AddNewStackScreen from './AddNewStack';
import RentalsStackScreen from './RentalsStack';
import SettingsStackScreen from './SettingsStack';

import {COLORS} from '../Configs/constants';

import I18n from '../Utils/I18n';

const Tabs = createBottomTabNavigator();

export default function TabsScreen() {
  return (
    <Tabs.Navigator
      tabBarOptions={{
        activeTintColor: COLORS.PRIMARY,
        inactiveTintColor: COLORS.INACTIVE,
        labelStyle: {
          fontSize: 12,
          fontFamily: 'Montserrat-Regular',
          marginBottom: 1,
        },
      }}>
      <Tabs.Screen
        name={I18n.t('library_tabs')}
        component={LibraryStackScreen}
        options={{
          tabBarIcon: ({focused}) => {
            return focused ? <LibraryActiveIcon /> : <LibraryIcon />;
          },
        }}
      />
      <Tabs.Screen
        name={I18n.t('wishlist_tabs')}
        component={WishlistStackScreen}
        options={{
          tabBarIcon: ({focused}) => {
            return focused ? <WishlistActiveIcon /> : <WishlistIcon />;
          },
        }}
      />
      <Tabs.Screen
        name={I18n.t('add_new_tabs')}
        component={AddNewStackScreen}
        options={{
          tabBarIcon: ({focused}) => {
            return focused ? <AddNewActiveIcon /> : <AddNewIcon />;
          },
        }}
      />
      <Tabs.Screen
        name={I18n.t('rentals_tabs')}
        component={RentalsStackScreen}
        options={{
          tabBarIcon: ({focused}) => {
            return focused ? <RentalsActiveIcon /> : <RentalsIcon />;
          },
        }}
      />
      <Tabs.Screen
        name={I18n.t('Settings_tabs')}
        component={SettingsStackScreen}
        options={{
          tabBarIcon: ({focused}) => {
            return focused ? <SettingsActiveIcon /> : <SettingsIcon />;
          },
        }}
      />
    </Tabs.Navigator>
  );
}
