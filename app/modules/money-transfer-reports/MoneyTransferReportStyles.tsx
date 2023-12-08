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
  cardContainer: {
    backgroundColor: Colors.gray,
    padding: moderateScale(5),
    marginHorizontal: horizontalScale(10),
    borderRadius: moderateScale(10)
  },
  banknDetailsView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bankImage: {
    height: verticleScale(80),
    width: horizontalScale(40),
    marginTop: verticleScale(20),
    marginRight: horizontalScale(40),
  },
  greenTickImage: {
    width: horizontalScale(50),
    height: verticleScale(110),
    alignSelf: 'center',
    marginTop: verticleScale(20),
  },
  detailsView: {},
  viewText: {
    alignSelf: 'flex-end',
    fontWeight: '500',
    fontSize: moderateScale(18),
    marginRight: horizontalScale(10)
  },
  greenTicknView: {
    marginRight: horizontalScale(10),
    justifyContent: 'space-between',
  },
});

export default styles;
