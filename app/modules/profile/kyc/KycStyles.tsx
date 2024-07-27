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
  photoComponentContainer: {
    margin: moderateScale(5),
    marginTop: verticleScale(20),
  },
  placeholderText: {
    color: Colors.gray,
    fontSize: moderateScale(15),
    fontWeight: '500',
  },
  photoContainer: {
    backgroundColor: Colors.gray,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: horizontalScale(10),
    paddingVertical: verticleScale(20),
    borderRadius: moderateScale(10),
    marginBottom: verticleScale(20),
    height: verticleScale(280),
  },
  dateOfBirthView: {
    borderWidth: 2,
    borderColor: Colors.dark,
    flex: 1,
    fontSize: moderateScale(15),
    color: Colors.light,
    padding: verticleScale(18),
    borderRadius: moderateScale(5),
    fontWeight: '500',
    marginBottom: verticleScale(22),
  },
  userImage: {
    height: verticleScale(180),
    width: horizontalScale(80),
    marginLeft: horizontalScale(10),
  },
  numnImage: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  photoText: {
    fontSize: moderateScale(16),
    fontWeight: '500',
    marginRight: horizontalScale(20),
  },
  numberText: {
    fontSize: moderateScale(22),
    marginRight: horizontalScale(35),
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  modalContentContainer: {
    width: '100%',
    height: '25%',
    backgroundColor: Colors.ligthtSkyBlue,
    borderTopRightRadius: moderateScale(20),
    borderTopLeftRadius: moderateScale(20),
    paddingTop: verticleScale(40),
    padding: moderateScale(5),
  },
  button: {
    backgroundColor: Colors.headerColor,
    marginHorizontal: horizontalScale(10),
    borderRadius: moderateScale(15),
    marginBottom: verticleScale(20),
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: horizontalScale(15),
  },
  text: {
    padding: moderateScale(10),
    color: Colors.dark,
    fontWeight: '500',
    fontSize: moderateScale(15),
  },
  textInputStyles: {
    borderWidth: 2,
    borderColor: Colors.dark,
    flex: 1,
    fontSize: moderateScale(15),
    color: Colors.dark,
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
  birthDate: {
    color: Colors.dark,
    fontWeight: '500',
    fontSize: moderateScale(15),
  },
  uploadedStyles: {
    color: Colors.green,
    fontSize: moderateScale(15),
    paddingLeft: horizontalScale(8),
  },
  uploadedView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  closeContainer: {
    flex: 1,
  },
  submitButton: {
    backgroundColor: Colors.cornFlowerBlue,
    alignItems: 'center',
    padding: moderateScale(10),
    borderRadius: moderateScale(10),
    marginBottom: verticleScale(15),
  },
  submitText: {
    color: Colors.light,
    fontSize: moderateScale(15),
  },
  topSpace:{
    marginTop: verticleScale(-20)
  }
});

export default styles;
