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
        name="Library"
        component={LibraryStackScreen}
        options={{
          tabBarIcon: ({focused}) => {
            return focused ? <LibraryActiveIcon /> : <LibraryIcon />;
          },
        }}
      />
      <Tabs.Screen
        name="Wishlist"
        component={WishlistStackScreen}
        options={{
          tabBarIcon: ({focused}) => {
            return focused ? <WishlistActiveIcon /> : <WishlistIcon />;
          },
        }}
      />
      <Tabs.Screen
        name="Add New"
        component={AddNewStackScreen}
        options={{
          tabBarIcon: ({focused}) => {
            return focused ? <AddNewActiveIcon /> : <AddNewIcon />;
          },
        }}
      />
      <Tabs.Screen
        name="Rentals"
        component={RentalsStackScreen}
        options={{
          tabBarIcon: ({focused}) => {
            return focused ? <RentalsActiveIcon /> : <RentalsIcon />;
          },
        }}
      />
      <Tabs.Screen
        name="Settings"
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
