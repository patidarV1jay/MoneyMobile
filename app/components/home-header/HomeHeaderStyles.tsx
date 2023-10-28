import { StyleSheet } from 'react-native';
import { Colors, horizontalScale, moderateScale, verticleScale } from '../../theme';

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: Colors.dark,
  },
  directionRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTitle: {
    justifyContent: 'space-between',
    marginHorizontal: horizontalScale(10),
    marginVertical: verticleScale(25),
  },
  textAppName: {
    fontWeight: 'bold',
    fontSize: moderateScale(20),
    color: Colors.light,
    marginLeft: horizontalScale(30),
  },
  iconBell: {
    marginRight: horizontalScale(20),
  },
  balanceView:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginHorizontal:horizontalScale(10),
    marginVertical:verticleScale(20),
  },
  textStyles:{
    color:Colors.light,
    fontSize:moderateScale(14)
  },
  textBalance:{
     fontSize:moderateScale(20)
  }
});

export default styles;
