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
  cotainerHoldingKeyboardView: {
    marginTop: verticleScale(20),
    marginHorizontal: horizontalScale(10),
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
  userImage: {
    height: verticleScale(180),
    width: horizontalScale(80),
    marginLeft: horizontalScale(10),
  },
  numnImage: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  numberText: {
    fontSize: moderateScale(22),
    marginRight: horizontalScale(35),
  },
  photoText: {
    fontSize: moderateScale(16),
    fontWeight: '500',
    marginRight: horizontalScale(20),
  },
  submitButton: {
    backgroundColor: Colors.dark,
    marginBottom: verticleScale(20),
    padding: moderateScale(10),
    borderRadius: moderateScale(10),
  },
  submitText: {
    color: Colors.light,
    alignSelf: 'center',
    fontWeight: '500',
    fontSize: moderateScale(18),
    letterSpacing: horizontalScale(2),
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  modalContentContainer: {
    width: '100%',
    height: '30%',
    backgroundColor: Colors.dark,
    borderTopRightRadius: moderateScale(15),
    borderTopLeftRadius: moderateScale(15),
    flexDirection: 'row',
  },
  imagePickerText: {
    fontWeight: '500',
    color: Colors.light,
    padding: moderateScale(14),
    fontSize: moderateScale(15),
  },
  imagePickerButton: {
    backgroundColor: Colors.headerColor,
    marginHorizontal: horizontalScale(15),
    borderRadius: moderateScale(4),
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeView: {
    flex: 1,
  },
});

export default styles;
