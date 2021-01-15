import React from 'react';
import {View, Image, Text} from 'react-native';

import {ContainedButton, OutlinedButton} from '../FormButtons';
import I18n from '../../Utils/I18n';

import {styles} from './styles';

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
            <Text style={styles.availability}>{I18n.t('available')}</Text>
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
        <OutlinedButton label={I18n.t('wishlist_button')} />
        <ContainedButton background={true} label={I18n.t('rent_button')} />
      </View>
    </View>
  );
}
