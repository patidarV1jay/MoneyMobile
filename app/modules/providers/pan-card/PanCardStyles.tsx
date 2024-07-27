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
    backgroundColor: Colors.fadeWhite,
    borderRadius: moderateScale(10),
    paddingHorizontal: horizontalScale(10),
    color: Colors.dark,
    fontWeight: '500',
    fontSize: moderateScale(16),
  },
  textInputView: {
    marginHorizontal: horizontalScale(10),
  },
  userIDText: {
    color: Colors.gray,
    fontWeight: '500',
    fontSize: moderateScale(15),
    marginTop: verticleScale(25),
  },
  quantityView: {
    backgroundColor: Colors.fadeWhite,
    height: verticleScale(100),
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
  dropDownView: {},
  textItem: {
    color: Colors.dark,
    fontWeight: '500',
    fontSize: moderateScale(15),
  },
  viewAboveFlatlist: {
    height: verticleScale(800),
    backgroundColor: Colors.fadeWhite,
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
    backgroundColor: Colors.cornFlowerBlue,
    position: 'absolute',
    alignSelf: 'flex-end',
    paddingHorizontal: horizontalScale(25),
    paddingVertical: verticleScale(20),
    marginTop: verticleScale(50),
    borderRadius: moderateScale(10),
  },
  submitButton: {
    backgroundColor: Colors.cornFlowerBlue,
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
