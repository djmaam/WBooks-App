import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {COLORS, FONTS} from '../../Configs/constants';

export default function NotificationsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Here will appear all the notifications...</Text>
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
    marginLeft: '15%',
    color: COLORS.TEXT,
    fontWeight: FONTS.WEIGHT.BOLD,
    fontSize: FONTS.SIZE.H3,
    fontFamily: 'Montserrat-Regular',
  },
});
