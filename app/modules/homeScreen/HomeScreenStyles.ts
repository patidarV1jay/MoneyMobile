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
    height: verticleScale(150),
    aspectRatio: 1,
  },
  columnWrapper: {
    marginBottom: verticleScale(70),
    marginHorizontal: horizontalScale(18),
  },
  flatListContainer: {
    width: cardWidth,
    marginHorizontal: horizontalScale(10),
    marginTop: verticleScale(-10),
    alignItems:'center'
  },
  containerWithFlatlist: {
    marginTop: verticleScale(60),
  },
});

export default styles;
