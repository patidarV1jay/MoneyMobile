import { StyleSheet } from 'react-native';
import {
  Colors,
  horizontalScale,
  moderateScale,
  verticleScale,
} from '../../../theme';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.headerColor,
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
  viewContainingTextInputs: {
    marginTop: verticleScale(20),
    marginHorizontal: horizontalScale(10),
  },
  dropDownView: {
    borderWidth: moderateScale(2),
    borderRadius: moderateScale(5),
    height: verticleScale(90),
    justifyContent: 'center',
  },
  selectBankText: {
    fontSize: moderateScale(15),
    padding: moderateScale(5),
  },
  container: {
    flex: 1,
  },
  contentContainer: {
    backgroundColor: 'white',
  },
  itemContainer: {
    padding: 6,
    margin: 6,
    backgroundColor: '#eee',
  },
  deviceText: {
    marginTop: verticleScale(20),
  },
  scanNowButton: {
    backgroundColor: Colors.dark,
    padding: moderateScale(12),
    marginTop: verticleScale(80),
    borderRadius: moderateScale(10),
  },
  scanNowText: {
    color: Colors.light,
    alignSelf: 'center',
    letterSpacing: horizontalScale(1),
    fontWeight: '500',
  },
});

export default styles;
