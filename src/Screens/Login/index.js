import React, {useState, useContext} from 'react';
import {View, Text, ImageBackground, Image} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import {useFormik} from 'formik';
import * as Yup from 'yup';

import {FormInput, FormPicker} from '../../Components/FormInputs';
import {SignInButton} from '../../Components/FormButtons';
import {ErrorModal} from '../../Components/ErrorModal';
import {AuthContext} from '../../Routers/index';
import {COLORS} from '../../Configs/constants';

import {styles} from './styles';

const background = require('../../Assets/General/bc_inicio.png');
const logo = require('../../Assets/General/ic_group.png');

const LoginSchema = Yup.object().shape({
  first_name: Yup.string().min(2, 'First name too short!').required('Required'),
  last_name: Yup.string().min(2, 'Last name too short!').required('Required'),
  email: Yup.string().email('The email is not valid!').required('Required'),
  age: Yup.string().required('Required!'),
  tyc: Yup.bool().oneOf(
    [true],
    'To sign in it is necessary that you first accept the terms and conditions.',
  ),
});

export default function LoginScreen() {
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const {authContext} = useContext(AuthContext);
  const {signIn} = authContext;

  const {
    values,
    handleSubmit,
    handleChange,
    handleBlur,
    setFieldValue,
    isSubmitting,
    errors,
  } = useFormik({
    validationSchema: LoginSchema,
    validateOnBlur: false,
    validateOnChange: false,
    initialValues: {
      first_name: '',
      last_name: '',
      email: '',
      age: '',
      tyc: false,
    },
    onSubmit: async (loginValues) => {
      setIsLoading(true);

      await signIn(loginValues);

      setIsLoading(false);
    },
  });

  return (
    <ImageBackground source={background} style={styles.image}>
      <View style={styles.container}>
        {Object.keys(errors).length > 0 && (
          <ErrorModal
            errors={errors}
            isVisible={error}
            setIsVisible={setError}
            isSubmitting={isSubmitting}
          />
        )}
        <View style={styles.section}>
          <Image source={logo} />
        </View>
        <View style={styles.form}>
          <View style={styles.inputContainer}>
            <FormInput
              placeholderTextColor={COLORS.TEXT}
              type={'name'}
              label={'first_name'}
              placeholder={'First name'}
              keyboardType={'default'}
              value={values.first_name}
              onChangeText={handleChange('first_name')}
              onBlur={handleBlur('first_name')}
              style={styles.inputForm}
            />
            <FormInput
              placeholderTextColor={COLORS.TEXT}
              type={'name'}
              label={'last_name'}
              placeholder={'Last name'}
              keyboardType={'default'}
              value={values.last_name}
              onChangeText={handleChange('last_name')}
              onBlur={handleBlur('last_name')}
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
            value={values.email}
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            style={styles.fullInputForm}
          />
          <View style={styles.inputContainer}>
            <View style={styles.inputPicker}>
              <FormPicker
                selectedValue={values.age}
                onValueChange={handleChange('age')}
              />
            </View>
          </View>
          <View style={styles.checkboxContainer}>
            <CheckBox
              value={values.tyc}
              onValueChange={(checked) => setFieldValue('tyc', checked)}
              tintColors={{true: COLORS.WHITE, false: COLORS.WHITE}}
            />
            <Text style={styles.textTyc}>
              I have read and accept the terms and conditions.
            </Text>
          </View>
          <SignInButton
            disabled={
              values.first_name === ''
                ? true
                : values.last_name === ''
                ? true
                : values.email === ''
                ? true
                : values.age === 'Age'
                ? true
                : false
            }
            label={'SIGN IN'}
            onPress={handleSubmit}
            isLoading={isLoading}
          />
        </View>
      </View>
    </ImageBackground>
  );
}
