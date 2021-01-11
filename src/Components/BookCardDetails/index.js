import React from 'react';
import {StyleSheet, View, Image, Text} from 'react-native';
import {ContainedButton, OutlinedButton} from '../FormButtons';
import {COLORS, FONTS} from '../../Configs/constants';

export default function BookCardDetails(props) {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.cardSection}>
        <View style={styles.imageContainer}>
          <Image
            style={props.image ? styles.image : styles.image_not_available}
            source={
              props.focusBook.image_url
                ? {
                    uri: props.focusBook.image_url,
                  }
                : require('../../Assets/General/not-available.png')
            }
          />
        </View>
        <View style={styles.infoContainer}>
          <View>
            <Text style={styles.textTitle}>{props.focusBook.title}</Text>
          </View>
          <View>
            <Text style={styles.availability}>Available</Text>
          </View>
          <View>
            <Text style={styles.textOther}>{props.focusBook.author}</Text>
          </View>
          <View>
            <Text style={styles.textOther}>{props.focusBook.year}</Text>
          </View>
          <View>
            <Text style={styles.textOther}>{props.focusBook.genre}</Text>
          </View>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <OutlinedButton label={'ADD TO WISHLIST'} />
        <ContainedButton background={true} label={'RENT'} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    margin: '2%',
    backgroundColor: 'white',
    width: '95%',
    height: 320,
    borderRadius: 12,
    elevation: 2,
  },
  cardSection: {
    flexDirection: 'row',
  },
  infoContainer: {
    padding: 15,
    marginLeft: 15,
  },
  imageContainer: {
    width: '40%',
  },
  buttonContainer: {
    flex: 1,
    alignItems: 'center',
  },
  image: {
    resizeMode: 'contain',
    height: 200,
    marginTop: 15,
    marginLeft: 30,
  },
  image_not_available: {
    resizeMode: 'contain',
    height: 140,
    width: 130,
    marginTop: 15,
    marginLeft: 20,
  },
  availability: {
    color: COLORS.AVAILABLE,
    fontWeight: FONTS.WEIGHT.BOLD,
  },
  textTitle: {
    color: COLORS.TEXT,
    fontWeight: FONTS.WEIGHT.BOLD,
    fontSize: FONTS.SIZE.H2,
    marginEnd: 150,
  },
  textOther: {
    color: COLORS.TEXT,
    fontSize: FONTS.SIZE.REGULAR,
  },
});
