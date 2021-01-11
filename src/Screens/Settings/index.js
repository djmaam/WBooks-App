import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {ContainedButton} from '../../Components/FormButtons';
import {AuthContext} from '../../Routers/index';
import {COLORS, FONTS} from '../../Configs/constants';

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: '4%',
    marginTop: 50,
    alignItems: 'center',
  },
  activityIndicator: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    marginTop: 15,
    color: COLORS.TEXT,
    fontWeight: FONTS.WEIGHT.BOLD,
    fontSize: FONTS.SIZE.H3,
    fontFamily: 'Montserrat-Regular',
  },
});
