import { StyleSheet } from 'react-native';
import {
  Colors,
  horizontalScale,
  moderateScale,
  verticleScale,
} from '../../theme';

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.headerColor,
    flex: 1,
  },
  cardContainer: {
    backgroundColor: Colors.gray,
    marginHorizontal: horizontalScale(8),
    marginTop: verticleScale(10),
    borderRadius: moderateScale(5),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rechargeDetailsView: {
    padding: moderateScale(5),
    paddingLeft: horizontalScale(10),
  },
  text: {
    fontWeight: '500',
    color: Colors.dark,
    paddingVertical: moderateScale(2),
  },
  datenTime: {
    fontWeight: 'bold',
  },
  successnView: {
    paddingRight: horizontalScale(10),
    justifyContent: 'space-between',
    paddingVertical: verticleScale(5),
  },
  successText: {
    color: Colors.green,
    fontWeight: 'bold',
    fontSize: moderateScale(15),
  },
  viewText:{
    fontSize: moderateScale(18),
    fontWeight: 'bold',
    color: Colors.dark,
    alignSelf: 'flex-end'
  }
});

export default styles;
