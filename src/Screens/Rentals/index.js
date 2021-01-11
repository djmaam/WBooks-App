import React from 'react';
import {View, Text, Image} from 'react-native';

import {styles} from './styles';

export default function RentalsScreen() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        souce={require('../../Assets/General/maintenance-icon-1.png')}
        resizeMode="stretch"
      />
      <Text style={styles.text}>We are working for you ...</Text>
    </View>
  );
}
