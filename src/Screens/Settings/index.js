import React from 'react';
import {View, Text} from 'react-native';

import {ContainedButton} from '../../Components/FormButtons';
import {AuthContext} from '../../Routers/index';

import {styles} from './styles';

export default function SettingsScreen() {
  const {authContext, userdata} = React.useContext(AuthContext);
  const {signOut} = authContext;
  const {first_name} = userdata;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{'WELCOME ' + first_name.toUpperCase()}</Text>
      <ContainedButton label={'LOGOUT'} onPress={() => signOut()} />
    </View>
  );
}
