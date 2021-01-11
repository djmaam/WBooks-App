import React from 'react';
import {View, Text} from 'react-native';

import {styles} from './styles';

export default function NotificationsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Here will appear all the notifications...</Text>
    </View>
  );
}
