import { StyleSheet } from 'react-native';
import { Colors, verticleScale } from '../../../theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.headerColor,
  },
  sheetHeader:{
    backgroundColor: Colors.gray,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingVertical: verticleScale(5)
  }
});

export default styles;
