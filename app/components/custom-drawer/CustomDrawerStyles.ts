import { StyleSheet } from 'react-native';
import {
  Colors,
  horizontalScale,
  moderateScale,
  verticleScale,
} from '../../theme';

const styles = StyleSheet.create({
  buttonCommonStyles: {
    marginLeft: horizontalScale(18),
    fontSize: moderateScale(20),
  },
  buttonText: {
    fontSize: moderateScale(15),
    fontWeight: 'bold',
    color: Colors.light,
  },
  logoutButton: {
    marginTop: verticleScale(40),
    marginBottom: verticleScale(30),
  },
  appName: {
    marginLeft: horizontalScale(18),
    fontWeight: 'bold',
    marginTop: verticleScale(10),
    color: Colors.light,
  },
  shareButton: {
    marginTop: verticleScale(16),
  },
  textColor: {
    color: Colors.light,
    fontWeight: 'bold',
    fontSize: moderateScale(15),
  },
  drawerProfile: {
    alignItems: 'center',
    marginVertical: verticleScale(20),
  },
  drawerView: {
    backgroundColor: Colors.dark,
    marginTop: verticleScale(-8),
  },
  profileText: {
    color: Colors.light,
  },
  hrLine: {
    borderWidth: 1,
    flex: 1,
  },
});

export default styles;
