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
  },
  arrowNTitle: {
    flexDirection: 'row',
    marginHorizontal: horizontalScale(20),
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  titleText: {
    marginLeft: horizontalScale(20),
    fontWeight: '500',
    fontSize: moderateScale(18),
    color: Colors.light,
  },
  textInput: {
    backgroundColor: Colors.headerColor,
    marginHorizontal: horizontalScale(20),
    borderRadius: moderateScale(10),
    paddingLeft: horizontalScale(10),
    fontSize: moderateScale(15),
    marginVertical: verticleScale(60),
  },
  iconView: {
    position: 'absolute',
    left: horizontalScale(5),
  },
});

export default styles;
