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

import I18n from '../Utils/I18n';

const HomeStack = createStackNavigator();

export default function LibraryStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Library"
        component={LibraryScreen}
        options={({navigation}) => ({
          gestureEnabled: false,
          title: `${I18n.t('library')}`,
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
          title: `${I18n.t('book_details')}`,
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
          title: `${I18n.t('search')}`,
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
          title: `${I18n.t('notifications')}`,
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
