import React, {useState} from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';

import {ContainedButton} from '../../Components/FormButtons';
import {AuthContext} from '../../Routers/index';
import {COLORS} from '../../Configs/constants';

import I18n from '../../Utils/I18n';

import {styles} from './styles';

export default function SettingsScreen() {
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(false);
  const {authContext, userdata} = React.useContext(AuthContext);
  const {signOut, changeLanguage} = authContext;
  const {first_name, last_name} = userdata;

  const handleSaveLanguage = async () => {
    setIsLoading(true);
    let language = await AsyncStorage.getItem('@language');
    let es = 'es-US';
    let en = 'en-US';

    if (language === es) {
      await changeLanguage(en);
      navigation.navigate('Library');
      setIsLoading(false);
    } else if (language === en) {
      await changeLanguage(es);
      navigation.navigate('Library');
      setIsLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      {isLoading ? (
        <View style={styles.activityIndicator}>
          <ActivityIndicator size="large" color={COLORS.PRIMARY} />
        </View>
      ) : (
        <>
          <Text style={styles.text}>
            {`${I18n.t('welcome')} ` +
              first_name.toUpperCase() +
              ' ' +
              last_name.toUpperCase()}
          </Text>
          <ContainedButton
            label={I18n.t('change_language')}
            onPress={() => handleSaveLanguage()}
          />
          <ContainedButton
            label={I18n.t('logout_button')}
            onPress={() => signOut()}
          />
        </>
      )}
    </View>
  );
}
