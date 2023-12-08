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
  imageItem: {
    height: verticleScale(120),
    width: horizontalScale(60),
  },
  cardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.gray,
    margin: moderateScale(10),
    borderRadius: moderateScale(10),
  },
  itemNameText: {
    color: Colors.light,
    fontWeight: '500',
    fontSize: moderateScale(15),
  },
  caretView: {
    position: 'absolute',
    right: horizontalScale(5)
  },
});

export default styles;
