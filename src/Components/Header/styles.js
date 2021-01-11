import {StyleSheet, Dimensions} from 'react-native';
import {COLORS} from '../../Configs/constants';

const {width} = Dimensions.get('screen');
const ratio = width / 375; //375 is actual image width

export const styles = StyleSheet.create({
  image: {
    width: width,
    height: 102 * ratio, //102 is actual height of image
    backgroundColor: COLORS.BACKGROUND,
  },
  iconLeft: {
    margin: 5,
    marginLeft: 15,
    width: 25,
    height: 25,
  },
  iconRight: {
    margin: 5,
    marginRight: 15,
    width: 25,
    height: 25,
  },
});
