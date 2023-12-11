import { StyleSheet } from 'react-native';
import { Colors, horizontalScale, moderateScale } from '../../../theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.headerColor,
  },
  button: {
    backgroundColor: Colors.gray,
    padding: moderateScale(15),
    margin: moderateScale(10),
    borderRadius: moderateScale(5),
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    color: Colors.dark,
    fontWeight: '500',
    fontSize: moderateScale(16),
    marginLeft: horizontalScale(8)
  },
});

export default styles;
