import { StyleSheet } from 'react-native';
import { Colors, horizontalScale, moderateScale, verticleScale } from '../../../theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.headerColor,
  },
  contentContainer:{
    margin: moderateScale(10),
    flex:1
  },
  bankView:{
    borderWidth: 2,
    padding: moderateScale(10),
    borderRadius: moderateScale(5),
    marginBottom: verticleScale(21),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  bankText:{
    fontSize: moderateScale(15),
    marginBottom: verticleScale(5),
  },
  selectedBank:{
     fontSize: moderateScale(15),
     color: Colors.light
  },
  itemContainer: {
    padding: moderateScale(8),
    marginHorizontal: horizontalScale(4),
    backgroundColor: Colors.headerColor,
    borderRadius: moderateScale(5),
    marginTop: verticleScale(20),
  },
  bottomSheetContainer:{
    backgroundColor: Colors.dark
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
  headerText:{
    fontSize: moderateScale(15),
    marginBottom: verticleScale(4)
  }
});

export default styles;
