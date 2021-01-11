import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

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
      }}>
      <Tabs.Screen
        name="Library"
        component={LibraryStackScreen}
        options={{
          tabBarIcon: ({focused}) => {
            return focused ? (
              <Image
                style={styles.image}
                source={require('../Assets/ToolBar/ic_library_active.png')}
                resizeMode="contain"
              />
            ) : (
              <Image
                style={styles.image}
                source={require('../Assets/ToolBar/ic_library.png')}
                resizeMode="contain"
              />
            );
          },
        }}
      />
      <Tabs.Screen
        name="Wishlist"
        component={WishlistStackScreen}
        options={{
          tabBarIcon: ({focused}) => {
            return focused ? (
              <Image
                style={styles.image}
                source={require('../Assets/ToolBar/ic_wishlist_active.png')}
                resizeMode="contain"
              />
            ) : (
              <Image
                style={styles.image}
                source={require('../Assets/ToolBar/ic_wishlist.png')}
                resizeMode="contain"
              />
            );
          },
        }}
      />
      <Tabs.Screen
        name="Add New"
        component={AddNewStackScreen}
        options={{
          tabBarIcon: ({focused}) => {
            return focused ? (
              <Image
                style={styles.image}
                source={require('../Assets/ToolBar/ic_add_new_active.png')}
                resizeMode="contain"
              />
            ) : (
              <Image
                style={styles.image}
                source={require('../Assets/ToolBar/ic_add_new.png')}
                resizeMode="contain"
              />
            );
          },
        }}
      />
      <Tabs.Screen
        name="Rentals"
        component={RentalsStackScreen}
        options={{
          tabBarIcon: ({focused}) => {
            return focused ? (
              <Image
                style={styles.image}
                source={require('../Assets/ToolBar/ic_myrentals_active.png')}
                resizeMode="contain"
              />
            ) : (
              <Image
                style={styles.image}
                source={require('../Assets/ToolBar/ic_myrentals.png')}
                resizeMode="contain"
              />
            );
          },
        }}
      />
      <Tabs.Screen
        name="Settings"
        component={SettingsStackScreen}
        options={{
          tabBarIcon: ({focused}) => {
            return focused ? (
              <Image
                style={styles.image}
                source={require('../Assets/ToolBar/ic_settings_active.png')}
                resizeMode="contain"
              />
            ) : (
              <Image
                style={styles.image}
                source={require('../Assets/ToolBar/ic_settings.png')}
                resizeMode="contain"
              />
            );
          },
        }}
      />
    </Tabs.Navigator>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 30,
    height: 30,
  },
});
