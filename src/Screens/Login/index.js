import React, {useState, useContext} from 'react';
import {View, Text, ImageBackground, Image, Alert} from 'react-native';
import CheckBox from '@react-native-community/checkbox';

import {FormInput, FormPicker} from '../../Components/FormInputs';
import {SignInButton} from '../../Components/FormButtons';
import {AuthContext} from '../../Routers/index';
import {validateEmail} from '../../Utils/Validations';
import {COLORS} from '../../Configs/constants';

import {styles} from './styles';

const background = require('../../Assets/General/bc_inicio.png');

export default function LoginScreen(props) {
  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [tyc, setTyc] = useState(false);
  const {authContext} = useContext(AuthContext);
  const {signIn} = authContext;

  const handleLogin = () => {
    if (tyc) {
      if (!validateEmail(email)) {
        Alert.alert('Ooops...', 'The email is not valid.', [{text: 'OK'}], {
          cancelable: true,
        });
        return false;
      } else {
        signIn(first_name, last_name, email, age);
      }
    } else {
      Alert.alert(
        'Hey, you!',
        'To sign in it is necessary that you first accept the terms and conditions.',
        [{text: 'OK'}],
        {cancelable: true},
      );
    }
  };

  return (
    <ImageBackground source={background} style={styles.image}>
      <View style={styles.container}>
        <View style={styles.section}>
          <Image source={require('../../Assets/General/ic_group.png')} />
        </View>
        <View style={styles.form}>
          <View style={styles.inputContainer}>
            <FormInput
              placeholderTextColor={COLORS.TEXT}
              type={'name'}
              label={'first_name'}
              placeholder={'First name'}
              keyboardType={'default'}
              value={first_name}
              onChangeText={(value) => setFirstName(value)}
              style={styles.inputForm}
            />
            <FormInput
              placeholderTextColor={COLORS.TEXT}
              type={'name'}
              label={'last_name'}
              placeholder={'Last name'}
              keyboardType={'default'}
              value={last_name}
              onChangeText={(value) => setLastName(value)}
              style={styles.inputForm}
            />
          </View>
          <FormInput
            placeholderTextColor={COLORS.TEXT}
            autoCapitalize="none"
            type={'email'}
            label={'email'}
            placeholder={'Email'}
            keyboardType={'email-address'}
            value={email}
            onChangeText={(value) => setEmail(value)}
            style={styles.fullInputForm}
          />
          <View style={styles.inputContainer}>
            <View style={styles.inputPicker}>
              <FormPicker
                selectedValue={age}
                onValueChange={(value) => setAge(value)}
              />
            </View>
          </View>
          <View style={styles.checkboxContainer}>
            <CheckBox
              value={tyc}
              onValueChange={setTyc}
              tintColors={{true: COLORS.WHITE, false: COLORS.WHITE}}
            />
            <Text style={styles.textTyc}>
              I have read and accept the terms and conditions.
            </Text>
          </View>
          <SignInButton
            disabled={
              first_name === ''
                ? true
                : last_name === ''
                ? true
                : email === ''
                ? true
                : age === ''
                ? true
                : false
            }
            label={'SIGN IN'}
            onPress={() => handleLogin(first_name, last_name, email, age)}
          />
        </View>
      </View>
    </ImageBackground>
  );
}
