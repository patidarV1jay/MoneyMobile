import { StyleSheet } from 'react-native';
import {
  Colors,
  horizontalScale,
  moderateScale,
  verticleScale,
} from '../../theme';

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.dark,
    height: '100%',
    borderRadius: moderateScale(10),
    borderColor: Colors.headerColor,
    borderWidth: 1,
  },
  text: {
    color: Colors.light,
  },
  contentContainer: {
    alignSelf: 'center',
    justifyContent: 'center',
    width: '90%',
    height: '60%',
    backgroundColor: Colors.opaque,
  },
  closingView: {
    height: '20%',
  },
  mainContainer: {
    backgroundColor: Colors.opaque,
  },
  choiceTitle: {
    color: Colors.light,
    fontSize: moderateScale(25),
    marginHorizontal:horizontalScale(20),
    marginTop:verticleScale(20),
    marginBottom:verticleScale(30)
  },
  flatListView: {
    marginTop: verticleScale(4),
    flexDirection: 'row',
    marginHorizontal:horizontalScale(20),
    alignItems:'center'
  },
  circle: {
    borderWidth: 1,
    height: verticleScale(50),
    width: horizontalScale(25),
    borderColor: Colors.light,
    borderRadius: moderateScale(100),
    marginRight:horizontalScale(20)
  },
  choiceText:{
    color:Colors.light,
    fontSize:moderateScale(20),
    marginVertical:verticleScale(20),
    marginLeft:horizontalScale(20),
    fontWeight:'400'
  }
});

export default styles;
