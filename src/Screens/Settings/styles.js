import {StyleSheet} from 'react-native';
import {COLORS, FONTS} from '../../Configs/constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: '4%',
    marginTop: 50,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: COLORS.BACKGROUND,
  },
  text: {
    marginTop: 15,
    color: COLORS.TEXT,
    fontSize: FONTS.SIZE.H3,
    fontFamily: 'Montserrat-Regular',
  },
  activityIndicator: {
    flex: 1,
    justifyContent: 'center',
  },
});
