import { StyleSheet } from 'react-native';
import { Colors, moderateScale, verticleScale } from '../../../../theme';

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.headerColor,
    flex: 1,
  },
  selectedProvider: {
    backgroundColor: Colors.offShade,
    padding: moderateScale(8),
    borderRadius: moderateScale(5),
    marginBottom:verticleScale(20)
  },
  selectedProviderContainer: {
    margin: moderateScale(10),
  },
  selectedProviderText:{
    fontWeight:'500'
  },
  providerText:{
    marginBottom:verticleScale(10)
  },
  textinputStyles: {
    backgroundColor: Colors.gray,
    padding: moderateScale(8),
    borderRadius: moderateScale(5),
    marginBottom:verticleScale(20)
  },
});

export default styles;
