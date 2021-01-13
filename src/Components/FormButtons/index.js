import React from 'react';
import {TouchableOpacity, Text, ActivityIndicator} from 'react-native';

import {COLORS} from '../../Configs/constants';

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
      {props.isLoading === true ? (
        <ActivityIndicator size="large" color={COLORS.PRIMARY} />
      ) : (
        <Text
          style={
            !props.disabled
              ? styles.signInButtonText
              : styles.signInButtonTextDisabled
          }>
          {props.label}
        </Text>
      )}
    </TouchableOpacity>
  );
}
