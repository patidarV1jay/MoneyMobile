import { StyleSheet } from 'react-native';
import {
  Colors,
  horizontalScale,
  moderateScale,
  verticleScale,
} from '../../theme';

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: Colors.primary,
    position: 'relative',
  },
  directionRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTitle: {
    justifyContent: 'space-between',
    marginHorizontal: horizontalScale(10),
    marginVertical: verticleScale(25),
  },
  textAppName: {
    fontWeight: '500',
    fontSize: moderateScale(18),
    color: Colors.dark,
    marginLeft: horizontalScale(30),
  },
  iconBell: {
    marginRight: horizontalScale(20),
  },
  balanceView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: horizontalScale(10),
    marginVertical: verticleScale(20),
  },
  textStyles: {
    color: Colors.dark,
    fontSize: moderateScale(14),
  },
  textBalance: {
    fontSize: moderateScale(18),
  },
  popupContainer: {
    backgroundColor: Colors.fadeWhite,
    height: verticleScale(270),
    width: horizontalScale(150),
    borderRadius: moderateScale(4),
    marginRight: horizontalScale(10),
    marginTop: verticleScale(14),
    elevation: 2
  },
  closeModalContainer: {
    flex: 1,
  },
  text: {
    fontWeight: '500',
    color: Colors.dark,
    padding: moderateScale(10),
    fontSize: moderateScale(15),
  },
});

export default styles;
