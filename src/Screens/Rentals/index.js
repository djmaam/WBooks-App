import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import {COLORS, FONTS} from '../../Configs/constants';

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: '4%',
    marginTop: 50,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  text: {
    marginTop: 15,
    marginVertical: 10,
    color: COLORS.TEXT,
    fontWeight: FONTS.WEIGHT.BOLD,
    fontSize: FONTS.SIZE.H3,
    fontFamily: 'Montserrat-Regular',
  },
  image: {
    width: 275,
    height: 180,
  },
});
