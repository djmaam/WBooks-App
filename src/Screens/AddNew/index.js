import React from 'react';
import {View, Text} from 'react-native';

import I18n from '../../Utils/I18n';

import {styles} from './styles';

export default function AddNewScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{I18n.t('working_for_you')}</Text>
    </View>
  );
}
