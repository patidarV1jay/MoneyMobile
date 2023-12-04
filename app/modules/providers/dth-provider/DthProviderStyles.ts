import { StyleSheet } from 'react-native';
import { Colors, verticleScale } from '../../../theme';

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.headerColor,
    flex: 1,
    position: 'relative',
  },
  absContainer:{
    height:verticleScale(200),
    backgroundColor:Colors.light,
    width:"90%",
    alignSelf:'center',
    position:'absolute',
    bottom:verticleScale(1400),
    zIndex:1
  }
});

export default styles;
