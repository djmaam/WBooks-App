import {StyleSheet} from 'react-native';
import {COLORS, FONTS} from '../../Configs/constants';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  cardContainer: {
    margin: '2%',
    backgroundColor: COLORS.WHITE,
    width: '96%',
    height: 125,
    borderRadius: 12,
    elevation: 2,
  },
  infoContainer: {
    width: '70%',
    padding: 15,
    marginLeft: 15,
  },
  imageContainer: {
    width: '30%',
  },
  image: {
    resizeMode: 'contain',
    height: 100,
    marginTop: 15,
    marginLeft: 25,
    marginBottom: 15,
  },
  image_not_available: {
    resizeMode: 'contain',
    height: 100,
    width: 130,
    marginTop: 15,
  },
  textTitle: {
    color: COLORS.TEXT,
    fontSize: FONTS.SIZE.H3,
    fontFamily: 'Montserrat-Bold',
  },
  textSubTitle: {
    color: COLORS.TEXT,
    fontSize: FONTS.SIZE.REGULAR,
    fontFamily: 'Montserrat-Regular',
  },
});
