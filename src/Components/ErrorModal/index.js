import React, {useEffect} from 'react';
import {Modal, Text, TouchableOpacity, View} from 'react-native';

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
          {first_name ? <Text style={styles.modalText}>{first_name}</Text> : null}
          {last_name ? <Text style={styles.modalText}>{last_name}</Text> : null}
          {email ? <Text style={styles.modalText}>{email}</Text> : null}
          {age ? <Text style={styles.modalText}>{`Age is ${age}`}</Text> : null}
          {tyc ? <Text style={styles.modalText}>{tyc}</Text> : null}
          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => {
              setIsVisible(!isVisible);
            }}>
            <Text style={styles.closeText}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}
