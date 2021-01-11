import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';
import {COLORS, FONTS} from '../../Configs/constants';

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

const styles = StyleSheet.create({
  containedButtonContainer: {
    width: '80%',
    height: 45,
    marginVertical: 10,
    backgroundColor: COLORS.PRIMARY,
    borderRadius: 50,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  containedButtonText: {
    color: COLORS.WHITE,
    fontWeight: FONTS.WEIGHT.BOLD,
    fontSize: FONTS.SIZE.MEDIUM,
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
  outlinedButtonContainer: {
    width: '80%',
    height: 45,
    marginVertical: 10,
    backgroundColor: COLORS.WHITE,
    borderRadius: 50,
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderWidth: 2,
    borderColor: COLORS.PRIMARY,
  },
  outlinedButtonText: {
    color: COLORS.PRIMARY,
    fontWeight: FONTS.WEIGHT.BOLD,
    fontSize: FONTS.SIZE.MEDIUM,
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
  signInButtonContainer: {
    width: '94%',
    marginVertical: 10,
    backgroundColor: COLORS.WHITE,
    borderRadius: 50,
    paddingVertical: 15,
    paddingHorizontal: 12,
  },
  signInButtonText: {
    color: COLORS.PRIMARY,
    fontWeight: FONTS.WEIGHT.BOLD,
    fontSize: FONTS.SIZE.REGULAR,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    textTransform: 'uppercase',
  },
  signInButtonTextDisabled: {
    color: COLORS.INACTIVE,
    fontWeight: FONTS.WEIGHT.BOLD,
    fontSize: FONTS.SIZE.REGULAR,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    textTransform: 'uppercase',
  },
});
