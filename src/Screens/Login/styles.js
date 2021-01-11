import {StyleSheet} from 'react-native';
import {COLORS, FONTS} from '../../Configs/constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: '4%',
    marginBottom: 100,
  },
  section: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  form: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  inputForm: {
    width: '45%',
    marginRight: '3%',
    margin: 5,
    marginBottom: 20,
    borderRadius: 25,
    backgroundColor: 'white',
  },
  fullInputForm: {
    width: '95%',
    marginRight: '2%',
    marginBottom: 20,
    borderRadius: 25,
    backgroundColor: 'white',
  },
  inputContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  inputPicker: {
    width: '95%',
    marginRight: '2%',
    backgroundColor: COLORS.WHITE,
    borderRadius: 25,
    marginBottom: 20,
    overflow: 'hidden',
  },
  checkboxContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginLeft: 25,
  },
  textTyc: {
    paddingTop: 6,
    color: COLORS.WHITE,
    fontSize: FONTS.SIZE.REGULAR,
  },
});

export default styles;
