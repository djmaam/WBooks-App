import {StyleSheet} from 'react-native';
import {COLORS, FONTS} from '../../Configs/constants';

export const styles = StyleSheet.create({
  cardContainer: {
    margin: '2%',
    backgroundColor: 'white',
    width: '95%',
    height: 320,
    borderRadius: 12,
    elevation: 2,
  },
  cardSection: {
    flexDirection: 'row',
  },
  infoContainer: {
    padding: 15,
    marginLeft: 15,
  },
  imageContainer: {
    width: '40%',
  },
  buttonContainer: {
    flex: 1,
    alignItems: 'center',
  },
  image: {
    resizeMode: 'contain',
    height: 200,
    marginTop: 15,
    marginLeft: 30,
  },
  image_not_available: {
    resizeMode: 'contain',
    height: 140,
    width: 130,
    marginTop: 15,
    marginLeft: 20,
  },
  availability: {
    color: COLORS.AVAILABLE,
    fontWeight: FONTS.WEIGHT.BOLD,
  },
  textTitle: {
    color: COLORS.TEXT,
    fontWeight: FONTS.WEIGHT.BOLD,
    fontSize: FONTS.SIZE.H2,
    marginEnd: 150,
  },
  textOther: {
    color: COLORS.TEXT,
    fontSize: FONTS.SIZE.REGULAR,
  },
});
