import { StyleSheet } from 'react-native';

import { Dimensions } from 'react-native';
import {
  Colors,
  verticleScale,
  horizontalScale,
  moderateScale,
} from '../../../theme';

const width = Dimensions.get('window').width;
const inputWidth = width / 8;
const padding = width / 12;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light,
  },
  contentContainer: {
    marginTop: verticleScale(50),
  },
  otpSentText: {
    color: Colors.cornFlowerBlue,
    fontWeight: '500',
    fontSize: moderateScale(18),
    alignSelf: 'center',
  },
  textInputComponent: {
    borderWidth: 1,
    width: inputWidth,
    borderRadius: moderateScale(5),
    marginRight: horizontalScale(5),
    color: Colors.dark,
    fontWeight: '500',
    fontSize: moderateScale(18),
    textAlign: 'center',
  },
  inputWrapper: {
    flexDirection: 'row',
    marginTop: verticleScale(50),
    justifyContent: 'space-around',
    paddingHorizontal: padding,
  },
  button: {
    backgroundColor: Colors.cornFlowerBlue,
    alignItems: 'center',
    borderRadius: moderateScale(5),
    marginHorizontal: padding,
  },
  submitText: {
    fontWeight: '500',
    fontSize: moderateScale(16),
    paddingVertical: verticleScale(14),
    color: Colors.light,
  },
  incorrectOtp: {
    color: Colors.red,
    alignSelf: 'center',
    marginTop: verticleScale(20),
    marginBottom: verticleScale(-20),
  },

  resendOtp: {
    color: Colors.cornFlowerBlue,
    paddingHorizontal: padding,
  },
  otpContainer: {
    marginBottom: verticleScale(60),
  },
  timeExpired: {
    paddingHorizontal: padding,
    color: Colors.red,
    marginBottom: verticleScale(12),
  },
  resendOtpContainer: {
    marginTop: verticleScale(30),
  },
});

export default styles;
