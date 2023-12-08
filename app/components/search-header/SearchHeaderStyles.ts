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
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    marginBottom: verticleScale(35),
  },
  titleText: {
    marginLeft: horizontalScale(20),
    fontWeight: '500',
    fontSize: moderateScale(18),
    color: Colors.light,
  },
  textInputView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textInput: {
    fontSize: moderateScale(15),
    color: Colors.light,
    paddingLeft: horizontalScale(10),
  },
  iconnTitle: {
    flexDirection: 'row',
    marginHorizontal: horizontalScale(20),
    justifyContent: 'space-between',
    marginTop: verticleScale(20),
  },
  searchBarView: {
    backgroundColor: Colors.headerColor,
    marginHorizontal: horizontalScale(20),
    borderRadius: moderateScale(10),
    paddingHorizontal: horizontalScale(10),
    fontSize: moderateScale(15),
    marginBottom: verticleScale(50),
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default styles;
