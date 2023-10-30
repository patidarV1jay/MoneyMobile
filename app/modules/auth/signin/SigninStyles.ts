import { StyleSheet } from 'react-native';
import {
  Colors,
  horizontalScale,
  moderateScale,
  verticleScale,
} from '../../../theme';

const styles = StyleSheet.create({
  safeAreaViewContainer: {
    flex: 1,
    backgroundColor: Colors.headerColor,
    height: '100%',
  },
  signinImage: {
    height: verticleScale(760),
    alignSelf: 'center',
    aspectRatio: 1,
  },
  siginContainer: {
    backgroundColor: Colors.dark,
    flex: 1,
    borderTopLeftRadius: moderateScale(40),
    borderTopRightRadius: moderateScale(40),
    marginTop: verticleScale(-20),
  },
  siginContainerBottom: {
    backgroundColor: Colors.dark,
    flex: 1,
    borderTopLeftRadius: moderateScale(40),
    borderTopRightRadius: moderateScale(40),
    marginTop: verticleScale(-20),
    bottom: 100,
  },
  appNameText: {
    color: Colors.light,
    fontSize: moderateScale(20),
    fontWeight: '500',
    margin: moderateScale(18),
    marginLeft: moderateScale(30),
    marginBottom: verticleScale(70),
  },
  textInputStyles: {
    borderBottomWidth: 2,
    borderColor: Colors.light,
    flex: 1,
    marginHorizontal: horizontalScale(5),
    fontSize: moderateScale(18),
    color: Colors.light,
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
  emptyView: {
    height: verticleScale(110),
  },
  loginButton: {
    backgroundColor: Colors.gray,
    borderRadius: moderateScale(10),
    marginVertical: verticleScale(70),
    alignItems: 'center',
    padding: moderateScale(7),
    marginHorizontal: horizontalScale(20),
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
    color: Colors.light,
    fontWeight: '500',
    fontSize: moderateScale(14),
  },
  registerText: {
    color: Colors.cornFlowerBlue,
    fontWeight: 'bold',
    fontSize: moderateScale(20),
  },
  registerButton: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.dark,
    marginBottom: verticleScale(20),
  },
  registerButtonBottom: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.dark,
    marginBottom: verticleScale(240),
  },
  customTextInputView: {
    marginBottom: verticleScale(40),
  },
});

export default styles;
