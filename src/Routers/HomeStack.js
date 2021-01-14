import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {
  HeaderBackground,
  GoBackIcon,
  SearchIcon,
  NotificationIcon,
  RatingActiveIcon,
} from '../Components/Header';

import LibraryScreen from '../Screens/Library';
import BookDetailScreen from '../Screens/BookDetail';
import SearchScreen from '../Screens/Search';
import NotificationsScreen from '../Screens/Notifications';

import {COLORS} from '../Configs/constants';

const HomeStack = createStackNavigator();

export default function LibraryStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Main"
        component={LibraryScreen}
        options={({navigation}) => ({
          gestureEnabled: false,
          title: 'LIBRARY',
          headerTintColor: COLORS.WHITE,
          headerBackground: (props) => <HeaderBackground />,
          headerLeft: () => (
            <NotificationIcon
              onPress={() => navigation.navigate('Notifications')}
            />
          ),
          headerRight: () => (
            <SearchIcon onPress={() => navigation.navigate('Search')} />
          ),
          headerTitleStyle: {
            flex: 1,
            textAlign: 'center',
            fontFamily: 'Montserrat-Regular',
          },
        })}
      />
      <HomeStack.Screen
        name="BookDetail"
        component={BookDetailScreen}
        options={({navigation}) => ({
          title: 'BOOK DETAILS',
          headerTintColor: COLORS.WHITE,
          headerBackground: (props) => <HeaderBackground />,
          headerLeft: () => <GoBackIcon onPress={() => navigation.goBack()} />,
          headerRight: () => <RatingActiveIcon />,
          headerTitleStyle: {
            flex: 1,
            textAlign: 'center',
            fontFamily: 'Montserrat-Regular',
          },
        })}
      />
      <HomeStack.Screen
        name="Search"
        component={SearchScreen}
        options={({navigation}) => ({
          title: 'SEARCH',
          headerTintColor: COLORS.WHITE,
          headerBackground: (props) => <HeaderBackground />,
          headerLeft: () => <GoBackIcon onPress={() => navigation.goBack()} />,
          headerRight: () => <RatingActiveIcon />,
          headerTitleStyle: {
            flex: 1,
            textAlign: 'center',
            fontFamily: 'Montserrat-Regular',
          },
        })}
      />
      <HomeStack.Screen
        name="Notifications"
        component={NotificationsScreen}
        options={({navigation}) => ({
          title: 'NOTIFICATIONS',
          headerTintColor: COLORS.WHITE,
          headerBackground: (props) => <HeaderBackground />,
          headerLeft: () => <GoBackIcon onPress={() => navigation.goBack()} />,
          headerRight: () => <RatingActiveIcon />,
          headerTitleStyle: {
            flex: 1,
            textAlign: 'center',
            fontFamily: 'Montserrat-Regular',
          },
        })}
      />
    </HomeStack.Navigator>
  );
}
