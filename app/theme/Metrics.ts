import { Dimensions, Platform, type ScaledSize } from 'react-native';
let { width, height }: ScaledSize = Dimensions.get('window');

if (width > height) {
  [width, height] = [height, width];
}
const guidelineBaseWidth: number = 375;
const guidelineBaseHeight: number = 812;

const horizontalScale = (size: number): number =>
  (width / guidelineBaseWidth) * size;
const verticleScale = (size: number): number =>
  (width / guidelineBaseHeight) * size;
const moderateScale = (size: number, factor = 0.5): number =>
  size + (horizontalScale(size) - size) * factor;

const globalMetrics = {
  isAndroid: Platform.OS === 'android',
  isIos: Platform.OS === 'ios',
  isPad: Platform.OS === 'ios' && Platform.isPad,
  isTV: Platform.isTV,
};

export { horizontalScale, moderateScale, verticleScale, globalMetrics };
