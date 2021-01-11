import React from 'react';
import {TouchableOpacity, View, Image, Text} from 'react-native';

import {styles} from './styles';

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
