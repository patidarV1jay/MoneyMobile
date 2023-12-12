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
  permanentAddressText: {
    fontWeight: '500',
    fontSize: moderateScale(16),
  },
  hrLine: {
    borderBottomWidth: 1,
    marginVertical: verticleScale(10),
    marginBottom: verticleScale(15)
  },
  permanentAddressView: {
    marginHorizontal: horizontalScale(12),
    margin: moderateScale(8),
  },
  textInputStyles: {
    borderWidth: 2,
    borderColor: Colors.dark,
    flex: 1,
    fontSize: moderateScale(15),
    color: Colors.light,
    padding: verticleScale(15),
    borderRadius: moderateScale(5),
    fontWeight: '500',
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
});

export default styles;
