import { StyleSheet } from 'react-native';
import {
  Colors,
  horizontalScale,
  moderateScale,
  verticleScale,
} from '../../../theme';

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.headerColor,
    flex: 1,
  },
  dropdown: {
    height: verticleScale(95),
    borderColor: Colors.dark,
    borderWidth: 2,
    borderRadius: moderateScale(5),
    paddingHorizontal: 8,
  },

  label: {
    position: 'absolute',
    backgroundColor: Colors.gray,
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: moderateScale(15),
    color: Colors.dark,
  },
  selectedTextStyle: {
    fontSize: moderateScale(15),
    fontWeight: 'bold',
    color: Colors.light,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  text: {
    color: Colors.dark,
    fontWeight: '500',
    fontSize: moderateScale(15),
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
    marginHorizontal: horizontalScale(10),
    marginTop: verticleScale(10),
  },
  listContainerStyle: {
    backgroundColor: Colors.dark,
    borderRadius: moderateScale(5),
    paddingHorizontal: horizontalScale(10),
    paddingVertical: verticleScale(10),

  },
  listItem: {
    color: Colors.light,
    fontWeight: '500',
    fontSize: moderateScale(15),
  },
  error: {
    color: 'red',
    marginLeft: horizontalScale(10),
  },
  dropdownView: {
    marginBottom: verticleScale(22),
  },
  dateFormtText: {},
  dateInput: {
    justifyContent: 'center',
  },
  button: {
    backgroundColor: Colors.dark,
    marginTop: verticleScale(35),
    height: verticleScale(80),
    borderRadius: moderateScale(5),
    justifyContent: 'center',
    alignItems: 'center',
  },
  proceed: {
    color: Colors.light,
    fontWeight: '500',
    fontSize: moderateScale(15),
  },
  date: {
    fontWeight: 'bold',
    fontSize: moderateScale(15),
    color: Colors.light,
  },
});

export default styles;
