import React from 'react';
import {StyleSheet, TouchableOpacity, View, Image, Text} from 'react-native';
import {COLORS, FONTS} from '../../Configs/constants';

export default function BookCard(props) {
  return (
    <TouchableOpacity style={styles.cardContainer} onPress={props.onPress}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            style={props.image ? styles.image : styles.image_not_available}
            source={
              props.image
                ? {
                    uri: props.image,
                  }
                : require('../../Assets/General/not-available.png')
            }
          />
        </View>
        <View style={styles.infoContainer}>
          <View>
            <Text style={styles.textTitle}>{props.title}</Text>
            <Text style={styles.textSubTitle}>{props.author}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  cardContainer: {
    margin: '2%',
    backgroundColor: 'white',
    width: '96%',
    height: 125,
    borderRadius: 12,
    elevation: 2,
  },
  infoContainer: {
    width: '70%',
    padding: 15,
    marginLeft: 15,
  },
  imageContainer: {
    width: '30%',
  },
  image: {
    resizeMode: 'contain',
    height: 100,
    marginTop: 15,
    marginLeft: 25,
    marginBottom: 15,
  },
  image_not_available: {
    resizeMode: 'contain',
    height: 100,
    width: 130,
    marginTop: 15,
  },
  textTitle: {
    color: COLORS.TEXT,
    fontWeight: FONTS.WEIGHT.BOLD,
    fontSize: FONTS.SIZE.H3,
    fontFamily: 'Montserrat-Regular',
  },
  textSubTitle: {
    color: COLORS.TEXT,
    fontSize: FONTS.SIZE.REGULAR,
    fontFamily: 'Montserrat-Regular',
  },
});
