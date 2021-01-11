import React from 'react';
import {TouchableOpacity, View, Image, Text} from 'react-native';

import {styles} from './styles';

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
