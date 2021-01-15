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
import I18n from '../../Utils/I18n';

import {styles} from './styles';

const background = require('../../Assets/General/bc_inicio.png');
const logo = require('../../Assets/General/ic_group.png');

const LoginSchema = Yup.object().shape({
  first_name: Yup.string()
    .min(2, `${I18n.t('first_name_warning')}`)
    .required(`${I18n.t('required')}`),
  last_name: Yup.string()
    .min(2, `${I18n.t('last_name_warning')}`)
    .required(`${I18n.t('required')}`),
  email: Yup.string()
    .email(`${I18n.t('email_warning')}`)
    .required(`${I18n.t('required')}`),
  age: Yup.string().required(`${I18n.t('required')}`),
  tyc: Yup.bool().oneOf([true], `${I18n.t('tyc_warning')}`),
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
              placeholder={I18n.t('first_name')}
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
              placeholder={I18n.t('last_name')}
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
            placeholder={I18n.t('email')}
            keyboardType={'email-address'}
            value={values.email}
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            style={styles.fullInputForm}
          />
          <View style={styles.inputContainer}>
            <FormInput
              placeholderTextColor={COLORS.TEXT}
              editable={false}
              type={'age'}
              label={'age'}
              placeholder={I18n.t('age')}
              style={styles.pickerLabel}
            />
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
            <Text style={styles.textTyc}>{I18n.t('tyc')}</Text>
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
            label={I18n.t('sign_in_button')}
            onPress={handleSubmit}
            isLoading={isLoading}
          />
        </View>
      </View>
    </ImageBackground>
  );
}
