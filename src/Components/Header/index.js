import React from 'react';
import {Image, TouchableOpacity} from 'react-native';

import {styles} from './styles';

export function HeaderBackground() {
  return (
    <Image
      style={styles.image}
      source={require('../../Assets/General/bc_navbar.png')}
      resizeMode="contain"
    />
  );
}

export function GoBackIcon(props) {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <Image
        style={styles.iconLeft}
        source={require('../../Assets/NavigationBar/ic_back.png')}
        resizeMode="contain"
      />
    </TouchableOpacity>
  );
}

export function SearchIcon(props) {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <Image
        style={styles.iconRight}
        source={require('../../Assets/NavigationBar/ic_search.png')}
        resizeMode="contain"
      />
    </TouchableOpacity>
  );
}

export function NotificationIcon(props) {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <Image
        style={styles.iconLeft}
        source={require('../../Assets/NavigationBar/ic_notifications.png')}
        resizeMode="contain"
      />
    </TouchableOpacity>
  );
}

export function RatingActiveIcon() {
  return (
    <Image
      style={styles.iconRight}
      source={require('../../Assets/General/ic_rating_star_active.png')}
      resizeMode="contain"
    />
  );
}
