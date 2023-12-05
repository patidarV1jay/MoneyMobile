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
  textinputStyle: {
    backgroundColor: Colors.gray,
    borderRadius: moderateScale(10),
    marginTop: verticleScale(10),
    paddingHorizontal: horizontalScale(10),
    color: Colors.dark,
    fontWeight: '500',
    fontSize: moderateScale(16),
  },
  textInputView: {
    margin: moderateScale(10),
  },
  userIDText: {
    color: Colors.light,
    fontWeight: '500',
    fontSize: moderateScale(15),
  },
  quantityView: {
    backgroundColor: Colors.gray,
    height: verticleScale(80),
    borderRadius: moderateScale(10),
    justifyContent: 'space-between',
    marginVertical: verticleScale(10),
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: horizontalScale(10),
  },
  selectQuantity: {
    fontWeight: '500',
  },
  dropDownView: {
    marginTop: verticleScale(30),
  },
  textItem: {
    color: Colors.dark,
    fontWeight: '500',
    fontSize: moderateScale(15),
  },
  viewAboveFlatlist: {
    height: verticleScale(800),
    backgroundColor: Colors.gray,
    width: '50%',
    borderRadius: moderateScale(10),
    paddingHorizontal: horizontalScale(10),
  },
  countButton: {
    margin: moderateScale(10),
  },
  selectedCount: {
    color: Colors.dark,
    fontWeight: '500',
    fontSize: moderateScale(16),
  },
  bottomButtons: {
    width: '100%',
    backgroundColor: Colors.light,
  },
  bottomButtonsView: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  psaText: {
    color: Colors.light,
    fontSize: moderateScale(15),
    fontWeight: 'bold',
    letterSpacing: horizontalScale(2),
  },
  psaButton: {
    backgroundColor: Colors.dark,
    borderWidth: 2,
    position: 'absolute',
    alignSelf: 'flex-end',
    paddingHorizontal: horizontalScale(25),
    paddingVertical: verticleScale(20),
    marginTop: verticleScale(50),
    borderRadius: moderateScale(10),
  },
  submitButton: {
    backgroundColor: Colors.dark,
    borderRadius: moderateScale(10),
    position: 'absolute',
    paddingHorizontal: horizontalScale(25),
    paddingVertical: verticleScale(23),
    marginTop: verticleScale(50),
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  submitText: {
    color: Colors.light,
    fontSize: moderateScale(15),
    fontWeight: 'bold',
    letterSpacing: horizontalScale(2),
  },
});

export default styles;
