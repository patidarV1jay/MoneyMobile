import { StyleSheet } from 'react-native';
import {
  Colors,
  horizontalScale,
  moderateScale,
  verticleScale,
} from '../../../theme';
import { HighlighterCircle } from 'phosphor-react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.headerColor,
  },
  numberView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 2,
    height: verticleScale(90),
    alignItems: 'center',
    borderRadius: moderateScale(5),
  },
  numberText: {
    fontSize: moderateScale(15),
    paddingHorizontal: horizontalScale(5),
    fontWeight: '500',
    textTransform: 'uppercase',
  },
  contentContainer: {
    margin: moderateScale(10),
    fontSize: moderateScale(15),
    flex: 1,
  },
  headerNumber: {
    marginTop: verticleScale(20),
    fontSize: moderateScale(15),
    marginBottom: verticleScale(5),
  },
  searchButton: {
    backgroundColor: Colors.dark,
    marginRight: horizontalScale(5),
    padding: moderateScale(5),
    borderRadius: moderateScale(5),
  },
  searchText: {
    color: Colors.light,
  },
  aepsBalance: {
    fontWeight: '500',
    fontSize: moderateScale(15),
  },
  plusButton: {
    alignItems: 'flex-end',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    flex: 1,
    marginHorizontal: horizontalScale(5),
    marginBottom: verticleScale(6),
  },
});

export default styles;
