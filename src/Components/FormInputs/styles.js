import {StyleSheet} from 'react-native';
import {COLORS} from '../../Configs/constants';

export const styles = StyleSheet.create({
  textInput: {
    borderBottomColor: COLORS.BLUE,
    borderBottomWidth: 1,
    width: '100%',
    height: 52,
    marginVertical: 10,
  },
  picker: {
    color: COLORS.TEXT,
    borderBottomColor: COLORS.BLUE,
    borderBottomWidth: 1,
    textAlign: 'center',
  },
});
