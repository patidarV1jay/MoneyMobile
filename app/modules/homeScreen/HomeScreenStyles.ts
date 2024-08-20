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
    color: Colors.dark,
    fontWeight: '500',

  },
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.primary,
  },
  scrollContainer: {
    backgroundColor: "#f0f0f0",
    borderTopLeftRadius: moderateScale(40),
    borderTopRightRadius: moderateScale(40),
  },
  imageItem: {
     width: horizontalScale(50),
     height: verticleScale(165)
  },
  columnWrapper: {
    marginBottom: verticleScale(70),
    marginHorizontal: horizontalScale(18),
  },
  flatListContainer: {
    width: cardWidth,
    marginHorizontal: horizontalScale(10),
    marginTop: verticleScale(-30),
    alignItems: 'center',
  },
  containerWithFlatlist: {
    marginTop: verticleScale(60),
  },
  itemName: {
    marginTop: verticleScale(-15),
    fontSize: moderateScale(11),
  },
});

export default styles;
