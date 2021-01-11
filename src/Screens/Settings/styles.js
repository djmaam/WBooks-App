import {StyleSheet} from 'react-native';
import {COLORS, FONTS} from '../../Configs/constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: '4%',
    marginTop: 50,
    alignItems: 'center',
    backgroundColor: COLORS.BACKGROUND,
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
