import React from 'react';
import {Image} from 'react-native';

import {styles} from './styles';

export function LibraryIcon() {
  return (
    <Image
      style={styles.image}
      source={require('../../Assets/ToolBar/ic_library.png')}
      resizeMode="contain"
    />
  );
}

export function LibraryActiveIcon() {
  return (
    <Image
      style={styles.image}
      source={require('../../Assets/ToolBar/ic_library_active.png')}
      resizeMode="contain"
    />
  );
}

export function WishlistIcon() {
  return (
    <Image
      style={styles.image}
      source={require('../../Assets/ToolBar/ic_wishlist.png')}
      resizeMode="contain"
    />
  );
}

export function WishlistActiveIcon() {
  return (
    <Image
      style={styles.image}
      source={require('../../Assets/ToolBar/ic_wishlist_active.png')}
      resizeMode="contain"
    />
  );
}

export function AddNewIcon() {
  return (
    <Image
      style={styles.image}
      source={require('../../Assets/ToolBar/ic_add_new.png')}
      resizeMode="contain"
    />
  );
}

export function AddNewActiveIcon() {
  return (
    <Image
      style={styles.image}
      source={require('../../Assets/ToolBar/ic_add_new_active.png')}
      resizeMode="contain"
    />
  );
}

export function RentalsIcon() {
  return (
    <Image
      style={styles.image}
      source={require('../../Assets/ToolBar/ic_myrentals.png')}
      resizeMode="contain"
    />
  );
}

export function RentalsActiveIcon() {
  return (
    <Image
      style={styles.image}
      source={require('../../Assets/ToolBar/ic_myrentals_active.png')}
      resizeMode="contain"
    />
  );
}

export function SettingsIcon() {
  return (
    <Image
      style={styles.image}
      source={require('../../Assets/ToolBar/ic_settings.png')}
      resizeMode="contain"
    />
  );
}

export function SettingsActiveIcon() {
  return (
    <Image
      style={styles.image}
      source={require('../../Assets/ToolBar/ic_settings_active.png')}
      resizeMode="contain"
    />
  );
}
