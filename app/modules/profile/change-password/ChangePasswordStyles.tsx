import { StyleSheet } from 'react-native';
import {
  Colors,
  horizontalScale,
  moderateScale,
  verticleScale,
} from '../../../theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.headerColor,
  },
  textInputStyles: {
    borderWidth: moderateScale(1),
    borderColor: Colors.dark,
    flex: 1,
    fontSize: moderateScale(15),
    color: Colors.dark,
    padding: verticleScale(15),
    borderRadius: moderateScale(5),
    fontWeight: '500',
    marginBottom: verticleScale(10)
  },
  textInputView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  errorView: {
    marginHorizontal: horizontalScale(10),
    marginBottom: verticleScale(22),
  },
  errorText: {
    fontWeight: '400',
    fontSize: moderateScale(14),
    color: Colors.red,
  },
  inputContainer: {
    margin: moderateScale(10),
    marginTop: verticleScale(30)
  },
  updateButton: {
    backgroundColor: Colors.cornFlowerBlue,
    padding: moderateScale(12),
    borderRadius: moderateScale(5),
    marginTop: verticleScale(50),
  },
  updateText: {
    color: Colors.light,
    fontWeight: '500',
    alignSelf: 'center',
    fontSize: moderateScale(15),
    letterSpacing: horizontalScale(1),
  },
});

export default styles;
