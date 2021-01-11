import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

import {styles} from './styles';

export function ContainedButton(props) {
  return (
    <TouchableOpacity
      style={styles.containedButtonContainer}
      onPress={props.onPress}>
      <Text style={styles.containedButtonText}>{props.label}</Text>
    </TouchableOpacity>
  );
}

export function OutlinedButton(props) {
  return (
    <TouchableOpacity
      style={styles.outlinedButtonContainer}
      onPress={props.onPress}>
      <Text style={styles.outlinedButtonText}>{props.label}</Text>
    </TouchableOpacity>
  );
}

export function SignInButton(props) {
  return (
    <TouchableOpacity
      disabled={props.disabled}
      style={styles.signInButtonContainer}
      onPress={props.onPress}>
      <Text
        style={
          !props.disabled
            ? styles.signInButtonText
            : styles.signInButtonTextDisabled
        }>
        {props.label}
      </Text>
    </TouchableOpacity>
  );
}
