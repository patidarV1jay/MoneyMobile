import { Dimensions, StyleSheet } from 'react-native';
import {
  Colors,
  horizontalScale,
  moderateScale,
  verticleScale,
} from '../../theme';

const windowWidth = Dimensions.get('window').width;
const width = windowWidth - horizontalScale(100);
const cardWidth = width / 3;

const styles = StyleSheet.create({
  textColor: {
    color: Colors.light,
  },
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.dark,
  },
  scrollContainer: {
    backgroundColor: Colors.headerColor,
    borderTopLeftRadius: moderateScale(40),
    borderTopRightRadius: moderateScale(40),
  },
  imageItem: {
    width: horizontalScale(100),
    height: verticleScale(100),
    aspectRatio: 1,
  },
  columnWrapper: {
    marginBottom: verticleScale(70),
    marginHorizontal: horizontalScale(40),
  },
  flatListContainer: {
    width: cardWidth,
    marginHorizontal: horizontalScale(10),
    marginTop: verticleScale(40),
  },
  containerWithFlatlist: {
    marginTop: verticleScale(50),
  },
});

export default styles;
