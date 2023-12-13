import { StyleSheet } from 'react-native';
import {
  Colors,
  horizontalScale,
  moderateScale,
  verticleScale,
} from '../../theme';
import { Dimensions } from 'react-native';

const width = Dimensions.get('window').width;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.headerColor,
  },
  scrollableButton: {
    flexDirection: 'row',
  },
  loginButton: {
    width: '50%',
    // backgroundColor: Colors.dark,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomWidth: 2,
    // borderColor: Colors.cornFlowerBlue,
  },
  signupButton: {
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'rgb(90, 90, 90)',
    padding: 10,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    borderBottomWidth: 2,
  },
  upiQrCodeText: {
    color: Colors.light,
    fontSize: moderateScale(15),
    fontWeight: '500',
  },
  qrCodeContainer: {
    flex: 1,
    width,
    backgroundColor: Colors.headerColor,
  },
  upiCollectionContainer: {
    flex: 1,
    width,
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
  inputContainer: {
    margin: moderateScale(10),
    marginTop: verticleScale(30),
  },
  proceedButton: {
    backgroundColor: Colors.dark,
    borderRadius: moderateScale(5),
    marginTop: verticleScale(20)
  },
  proceedText: {
    color: Colors.light,
    fontWeight: '500',
    letterSpacing: horizontalScale(0.5),
    fontSize: moderateScale(16),
    alignSelf: 'center',
    padding: moderateScale(10)
  },
});

export default styles;
