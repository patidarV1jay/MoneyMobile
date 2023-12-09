import { StyleSheet } from 'react-native';
import {
  Colors,
  horizontalScale,
  moderateScale,
  verticleScale,
} from '../../../theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: moderateScale(10),
    backgroundColor: Colors.headerColor,
  },
  headerRow: {
    flexDirection: 'row',
    borderBottomWidth: 2,
    borderBottomColor: Colors.light,
    marginBottom: verticleScale(20),
  },
  columnHeader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: verticleScale(10),
  },
  columnHeaderText: {
    fontWeight: 'bold',
    color: Colors.gray,
  },
  dataRow: {
    flexDirection: 'row',
    paddingVertical: verticleScale(12),
  },
  flatlistContainer: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.gray,
    marginBottom: verticleScale(20),
  },
  data: {
    flex: 1,
    textAlign: 'center',
    padding: moderateScale(2),
  },
  icon: {
    marginRight: horizontalScale(-10),
    width: 70,
    marginLeft: 30,
  },
  renderTableContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '99%',
  },
  contentContainer: {
    alignItems: 'center',
    borderWidth: 1,
    width: '33%',
    justifyContent: 'center',
  },
  renderTableText: {
    color: Colors.light,
    padding: moderateScale(2),
  },
  idText: {
    color: Colors.gray,
    fontSize: moderateScale(15),
    fontWeight: '500',
  },
  providerName: {
    color: Colors.light,
    fontWeight: 'bold',
    fontSize: moderateScale(15),
    textTransform: 'uppercase',
  },
  serviceText: {
    color: Colors.cornFlowerBlue,
    fontWeight: '500',
  },
  renderTableMargin: {
    marginBottom: verticleScale(10),
  },
});

export default styles;
