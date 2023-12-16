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
  aepsView: {
    borderWidth: moderateScale(2),
    marginBottom: verticleScale(60),
    borderRadius: moderateScale(5),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  contentContainer: {
    margin: moderateScale(10),
  },
  aepsBalanceText: {
    padding: moderateScale(12),
    fontWeight: 'bold',
    fontSize: moderateScale(15),
  },
  inputHeader: {
    fontSize: moderateScale(14),
    marginBottom: verticleScale(4),
  },
  proceedButton: {
    backgroundColor: Colors.dark,
    borderRadius: moderateScale(5),
    marginTop: verticleScale(25),
  },
  proceedText: {
    padding: moderateScale(12),
    color: Colors.light,
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: moderateScale(16),
  },
});

export default styles;
