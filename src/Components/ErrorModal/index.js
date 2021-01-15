import React, {useEffect} from 'react';
import {Modal, Text, TouchableOpacity, View} from 'react-native';

import I18n from '../../Utils/I18n';

import {styles} from './styles';

export function ErrorModal(props) {
  const {errors, isVisible, setIsVisible, isSubmitting} = props;
  const {first_name, last_name, email, age, tyc} = errors;

  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      setIsVisible(true);
    }
  }, [isSubmitting]);

  return (
    <Modal animationType="slide" transparent={true} visible={isVisible}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          {first_name ? (
            <Text style={styles.modalText}>{I18n.t('first_name_warning')}</Text>
          ) : null}
          {last_name ? (
            <Text style={styles.modalText}>{I18n.t('last_name_warning')}</Text>
          ) : null}
          {email ? (
            <Text style={styles.modalText}>{I18n.t('email_warning')}</Text>
          ) : null}
          {age ? (
            <Text style={styles.modalText}>
              {`${I18n.t('age_is')} ${I18n.t('required_age')}`}
            </Text>
          ) : null}
          {tyc ? (
            <Text style={styles.modalText}>{I18n.t('tyc_warning')}</Text>
          ) : null}
          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => {
              setIsVisible(!isVisible);
            }}>
            <Text style={styles.closeText}>{I18n.t('close')}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}
