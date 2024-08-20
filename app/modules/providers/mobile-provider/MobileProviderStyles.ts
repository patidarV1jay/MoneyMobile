import { StyleSheet } from 'react-native';
import { Colors, moderateScale } from '../../../theme';

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.headerColor,
    flex: 1,
  },
  list: {
    margin: moderateScale(10),
    padding: moderateScale(8),
    borderRadius: moderateScale(5),
    borderBottomWidth: moderateScale(1),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  providerNameText: {
    fontWeight: '500',
    fontSize: moderateScale(16),
    color: Colors.dark,
  },
});

export default styles;
