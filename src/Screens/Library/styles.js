import {StyleSheet} from 'react-native';
import {COLORS, FONTS} from '../../Configs/constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: '4%',
    marginTop: 50,
    backgroundColor: COLORS.BACKGROUND,
  },
  activityIndicator: {
    flex: 1,
    justifyContent: 'center',
  },
  errorMsg: {
    flex: 1,
    justifyContent: 'center',
  },
  textError: {
    color: COLORS.TEXT,
    fontSize: FONTS.SIZE.REGULAR,
    fontFamily: 'Monserrat-Regular',
    padding: 30,
  },
});
