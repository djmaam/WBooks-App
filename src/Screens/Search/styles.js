import {StyleSheet} from 'react-native';
import {COLORS, FONTS} from '../../Configs/constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: '4%',
    marginTop: 50,
  },
  activityIndicator: {
    flex: 1,
    justifyContent: 'center',
  },
  searchBar: {
    backgroundColor: COLORS.PRIMARY,
    color: COLORS.WHITE,
    borderRadius: 25,
    elevation: 6,
    marginVertical: 8,
    shadowColor: COLORS.PRIMARY,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
  },
  errorMsg: {
    flex: 1,
    justifyContent: 'center',
  },
  textError: {
    justifyContent: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    color: COLORS.TEXT,
    fontSize: FONTS.SIZE.REGULAR,
    fontFamily: 'Monserrat-Regular',
    padding: 30,
  },
});
