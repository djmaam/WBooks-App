import React from 'react';
import {StyleSheet, TouchableOpacity, View, Image, Text} from 'react-native';
import {FONTS} from '../../Configs/constants';

export default function BooksByGenre(props) {
  return (
    <TouchableOpacity style={styles.cardContainer} onPress={props.onPress}>
      <View>
        <View style={styles.textContainer}>
          <Text style={styles.textTitle}>{props.title}</Text>
        </View>
        <View>
          <Image
            style={styles.image}
            source={
              props.image
                ? {
                    uri: props.image,
                  }
                : require('../../Assets/General/not-available.png')
            }
          />
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    margin: 5,
    backgroundColor: 'white',
    width: 160,
    height: 220,
    borderRadius: 12,
    elevation: 2,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  image: {
    resizeMode: 'contain',
    height: 130,
    marginTop: 15,
  },
  textContainer: {
    marginHorizontal: 10,
    marginVertical: 5,
  },
  textTitle: {
    textAlign: 'center',
    fontWeight: FONTS.WEIGHT.BOLD,
  },
  textSubTitle: {
    textAlign: 'center',
  },
});
