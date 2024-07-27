import { StyleSheet } from 'react-native';
import {
  Colors,
  horizontalScale,
  moderateScale,
  verticleScale,
} from '../../theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.headerColor,
  },
  icon: {
    height: verticleScale(140),
    width: horizontalScale(50),
  },
  cardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textnCaret: {
    borderBottomWidth: moderateScale(1),
    flex: 1,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderColor: Colors.gray,
    marginRight: horizontalScale(10)
  },
  text: {
    color: Colors.dark,
    fontWeight: 'bold',
    fontSize: moderateScale(16),
  },
});

export default styles;
