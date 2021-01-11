import React from 'react';
import {View, Image, ImageBackground} from 'react-native';

import {styles} from './styles';

export default function SplashScreen() {
  const background = require('../../Assets/General/bc_inicio.png');

  return (
    <ImageBackground source={background} style={styles.background}>
      <View style={styles.container}>
        <View style={styles.section}>
          <Image source={require('../../Assets/General/ic_group.png')} />
        </View>
      </View>
    </ImageBackground>
  );
}
