import React from 'react';
import {TextInput} from 'react-native';
import {Picker} from '@react-native-picker/picker';

import {COLORS} from '../../Configs/constants';

import {styles} from './styles';

const Ages = require('../../Utils/Ages.json');

export function FormInput(props) {
  return (
    <TextInput
      placeholderTextColor={props.placeholderTextColor}
      editable={props.editable}
      style={props.style}
      placeholder={props.placeholder}
      type={props.type}
      label={props.label}
      secureTextEntry={props.secureTextEntry}
      keyboardType={props.keyboardType}
      value={props.value}
      onChangeText={props.onChangeText}
      autoCapitalize={props.autoCapitalize}
    />
  );
}

export function FormPicker(props) {
  return (
    <Picker
      selectedValue={props.selectedValue}
      onValueChange={props.onValueChange}
      style={styles.picker}>
      {Ages.map((age) => (
        <Picker.Item
          key={age.id}
          label={age.age}
          value={age.age}
          color={COLORS.GREY}
        />
      ))}
    </Picker>
  );
}

export function SearchInput(props) {
  return (
    <TextInput
      style={props.style}
      placeholder={props.placeholder}
      placeholderTextColor={props.placeholderTextColor}
      type={props.type}
      label={props.label}
      value={props.value}
      onChangeText={props.onChangeText}
    />
  );
}
