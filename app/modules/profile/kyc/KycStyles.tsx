import { StyleSheet } from 'react-native';
import { Colors, moderateScale, verticleScale } from '../../../theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.headerColor,
  },
  photoComponentContainer:{
    margin: moderateScale(5),
    marginTop: verticleScale(20)
  }
});

export default styles;
