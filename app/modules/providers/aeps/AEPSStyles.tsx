import { StyleSheet, Dimensions } from 'react-native';
import {
  Colors,
  horizontalScale,
  moderateScale,
  verticleScale,
} from '../../../theme';

const windowWidth = Dimensions.get('window').width;
const width = windowWidth - horizontalScale(10);
const cardWidth = width / 2;
const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.headerColor,
    height: '100%',
  },
  itemImage: {
    height: verticleScale(150),
    width: horizontalScale(70),
  },
  itemNameText: {
    color: Colors.light,
    marginTop: verticleScale(-15),
  },
  flatlistContainer: {
    alignItems: 'center',
    width: cardWidth,
  },
  payoutText: {
    color: Colors.light,
    fontWeight: 'bold',
    fontSize: moderateScale(16),
    marginLeft: horizontalScale(10),
    marginTop: verticleScale(20),
  },
  payoutView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: verticleScale(100),
    marginTop: verticleScale(20)
  },
  ledgerText: {
    color: Colors.light,
    fontSize: moderateScale(13),
  },
  bottomSectionView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: horizontalScale(12),
  },
  line: {
    flex: 1,
    borderBottomWidth: moderateScale(3),
    borderColor: Colors.dark,
    marginHorizontal: horizontalScale(12),
    marginTop: verticleScale(20),
  },
  footerStyles: {
    marginBottom: verticleScale(50),
  },
});

export default styles;
