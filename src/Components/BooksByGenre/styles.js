import {StyleSheet} from 'react-native';
import {COLORS, FONTS} from '../../Configs/constants';

export const styles = StyleSheet.create({
  cardContainer: {
    margin: 5,
    marginTop: 15,
    backgroundColor: COLORS.WHITE,
    width: 160,
    height: 200,
    borderRadius: 12,
    elevation: 2,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  image: {
    resizeMode: 'contain',
    height: 130,
    marginTop: 15,
  },
  textContainer: {
    marginHorizontal: 10,
    marginVertical: 5,
  },
  textTitle: {
    textAlign: 'center',
    fontFamily: 'Montserrat-Regular',
  },
});
