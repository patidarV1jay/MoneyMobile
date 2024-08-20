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
    backgroundColor: Colors.light,
  },
  customerNumberText: {
    color: Colors.gray,
    fontSize: moderateScale(14),
  },
  marginContainer: {
    marginTop: verticleScale(40),
    marginHorizontal: horizontalScale(10),
  },
  textInput: {
    backgroundColor: Colors.fadeWhite,
    marginTop: moderateScale(5),
    padding: moderateScale(8),
    borderRadius: moderateScale(5),
    color: Colors.dark,
    fontWeight: '500',
    fontSize: moderateScale(15),
    flex: 1,
  },
  validateButton: {
    backgroundColor: Colors.cornFlowerBlue,
    padding: moderateScale(6),
    marginTop: verticleScale(40),
    borderRadius: moderateScale(5),
  },
  validateText: {
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: moderateScale(15),
    color: Colors.light,
    paddingVertical: verticleScale(5),
  },
  errorText: {
    color: Colors.red,
    fontSize: moderateScale(13),
    marginTop: verticleScale(8),
  },
  bottomSpace: {
    marginBottom: verticleScale(20),
  },
  verifyButton: {
    backgroundColor: Colors.cornFlowerBlue,
    height: verticleScale(70),
    flex: 0.3,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: moderateScale(5),
    marginLeft: horizontalScale(5),
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  verifyText: {
    padding: 0,
    color: Colors.light,
    fontSize: moderateScale(15),
  },
});

export default styles;
