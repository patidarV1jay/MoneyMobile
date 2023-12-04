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
  customerNumberText: {
    color: Colors.light,
    fontWeight: '500',
    fontSize: moderateScale(18),
  },
  marginContainer: {
    marginTop: verticleScale(20),
    marginHorizontal: horizontalScale(10),
  },
  textInput: {
    backgroundColor: Colors.gray,
    marginTop: moderateScale(20),
    padding: moderateScale(8),
    borderRadius: moderateScale(5),
  },
  validateButton: {
    backgroundColor: Colors.cornFlowerBlue,
    padding: moderateScale(6),
    marginTop: verticleScale(40),
    borderRadius: moderateScale(10),
  },
  validateText: {
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: moderateScale(15),
  },
  errorText:{
    color:Colors.red,
    fontSize:moderateScale(12),
    marginTop:verticleScale(8)
  }
});

export default styles;
