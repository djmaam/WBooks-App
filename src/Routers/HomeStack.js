import React from 'react';
import {Image, Dimensions, StyleSheet, TouchableOpacity} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import LibraryScreen from '../Screens/Library';
import BookDetailScreen from '../Screens/BookDetail';
import SearchScreen from '../Screens/Search';
import NotificationsScreen from '../Screens/Notifications';
import {COLORS} from '../Configs/constants';

const HomeStack = createStackNavigator();
const {width} = Dimensions.get('screen');
const ratio = width / 375; //375 is actual image width

export default function LibraryStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Main"
        component={LibraryScreen}
        options={({navigation}) => ({
          title: 'LIBRARY',
          headerTintColor: COLORS.WHITE,
          headerBackground: (props) => (
            <Image
              style={styles.image}
              source={require('../Assets/General/bc_navbar.png')}
              resizeMode="contain"
            />
          ),
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('Search')}>
              <Image
                style={styles.iconRight}
                source={require('../Assets/NavigationBar/ic_search.png')}
                resizeMode="contain"
              />
            </TouchableOpacity>
          ),
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate('Notifications')}>
              <Image
                style={styles.iconLeft}
                source={require('../Assets/NavigationBar/ic_notifications.png')}
                resizeMode="contain"
              />
            </TouchableOpacity>
          ),
          headerTitleStyle: {flex: 1, textAlign: 'center'},
        })}
      />
      <HomeStack.Screen
        name="BookDetail"
        component={BookDetailScreen}
        options={({navigation}) => ({
          title: 'BOOK DETAILS',
          headerTintColor: COLORS.WHITE,
          headerBackground: (props) => (
            <Image
              style={styles.image}
              source={require('../Assets/General/bc_navbar.png')}
              resizeMode="contain"
            />
          ),
          headerRight: () => (
            <Image
              style={styles.iconRight}
              source={require('../Assets/General/ic_rating_star_active.png')}
              resizeMode="contain"
            />
          ),
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image
                style={styles.iconLeft}
                source={require('../Assets/NavigationBar/ic_back.png')}
                resizeMode="contain"
              />
            </TouchableOpacity>
          ),
          headerTitleStyle: {flex: 1, textAlign: 'center'},
        })}
      />
      <HomeStack.Screen
        name="Search"
        component={SearchScreen}
        options={({navigation}) => ({
          title: 'SEARCH',
          headerTintColor: COLORS.WHITE,
          headerBackground: (props) => (
            <Image
              style={styles.image}
              source={require('../Assets/General/bc_navbar.png')}
              resizeMode="contain"
            />
          ),
          headerRight: () => (
            <Image
              style={styles.iconRight}
              source={require('../Assets/General/ic_rating_star_active.png')}
              resizeMode="contain"
            />
          ),
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image
                style={styles.iconLeft}
                source={require('../Assets/NavigationBar/ic_back.png')}
                resizeMode="contain"
              />
            </TouchableOpacity>
          ),
          headerTitleStyle: {flex: 1, textAlign: 'center'},
        })}
      />
      <HomeStack.Screen
        name="Notifications"
        component={NotificationsScreen}
        options={({navigation}) => ({
          title: 'NOTIFICATIONS',
          headerTintColor: COLORS.WHITE,
          headerBackground: (props) => (
            <Image
              style={styles.image}
              source={require('../Assets/General/bc_navbar.png')}
              resizeMode="contain"
            />
          ),
          headerRight: () => (
            <Image
              style={styles.iconRight}
              source={require('../Assets/General/ic_rating_star_active.png')}
              resizeMode="contain"
            />
          ),
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image
                style={styles.iconLeft}
                source={require('../Assets/NavigationBar/ic_back.png')}
                resizeMode="contain"
              />
            </TouchableOpacity>
          ),
          headerTitleStyle: {flex: 1, textAlign: 'center'},
        })}
      />
    </HomeStack.Navigator>
  );
}

const styles = StyleSheet.create({
  image: {
    width: width,
    height: 102 * ratio, //102 is actual height of image
  },
  iconLeft: {
    margin: 5,
    marginLeft: 15,
    width: 25,
    height: 25,
  },
  iconRight: {
    margin: 5,
    marginRight: 15,
    width: 25,
    height: 25,
  },
});
