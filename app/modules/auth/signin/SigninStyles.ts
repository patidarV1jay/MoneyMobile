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
    backgroundColor: '#D2E0FB',
  },
  keyboardContainer: {
    flex: 1,
  },
  signinImage: {
    height: verticleScale(600),
    alignSelf: 'center',
    aspectRatio: 1,
  },
  siginContainer: {
    backgroundColor: Colors.light,
    height: '100%',
    borderTopLeftRadius: moderateScale(40),
    borderTopRightRadius: moderateScale(40),
  },
  appNameText: {
    color: Colors.dark,
    fontSize: moderateScale(18),
    fontWeight: '500',
    margin: moderateScale(18),
    marginLeft: moderateScale(30),
    marginBottom: verticleScale(50),
  },
  textInputStyles: {
    borderBottomWidth: 2,
    borderColor: Colors.offShade,
    flex: 1,
    marginHorizontal: horizontalScale(5),
    fontSize: moderateScale(18),
    color: Colors.dark,
    padding: moderateScale(5),
    paddingBottom: verticleScale(15),
    marginRight: horizontalScale(20),
  },
  textInputView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: moderateScale(24),
    marginBottom: verticleScale(10),
  },
  textInputPasswordView: {
    marginTop: verticleScale(30),
  },
  loginButton: {
    borderRadius: moderateScale(10),
    marginVertical: verticleScale(70),
    alignItems: 'center',
    padding: moderateScale(7),
    marginHorizontal: horizontalScale(20),
    backgroundColor: Colors.cornFlowerBlue,
  },
  loginText: {
    alignSelf: 'center',
    fontSize: moderateScale(18),
    fontWeight: 'bold',
    color: Colors.light,
  },
  errorView: {
    marginHorizontal: horizontalScale(51),
    marginTop: verticleScale(5),
  },
  errorText: {
    fontWeight: '400',
    fontSize: moderateScale(14),
    color: Colors.red,
  },
  newUserText: {
    color: Colors.dark,
    fontWeight: '500',
    fontSize: moderateScale(14),
  },
  registerText: {
    color: Colors.cornFlowerBlue,
    fontWeight: 'bold',
    fontSize: moderateScale(18),
  },
  registerButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  customTextInputView: {
    marginBottom: verticleScale(40),
  },
  secureEntry: {
    alignSelf: 'flex-end',
    position: 'absolute',
    top: verticleScale(20),
    right: horizontalScale(20),
  },
});

export default styles;
