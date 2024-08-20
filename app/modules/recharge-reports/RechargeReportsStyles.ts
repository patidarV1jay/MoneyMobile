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
    backgroundColor: Colors.light,
    marginHorizontal: horizontalScale(8),
    marginTop: verticleScale(10),
    borderRadius: moderateScale(5),
    flexDirection: 'row',
    justifyContent: 'space-between',
    elevation: 2,
    padding: moderateScale(5)
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
  viewText: {
    fontSize: moderateScale(16),
    fontWeight: 'bold',
    color: Colors.dark,
    alignSelf: 'flex-end',
  },
  modalContainer: {
    backgroundColor: Colors.opaque,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContentView: {
    width: '90%',
    height: verticleScale(800),
    backgroundColor: Colors.gray,
    borderRadius: moderateScale(10),
  },
  modalCloseView: {
    flex: 1,
    width: '100%',
  },

  imagenSuccess: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: verticleScale(16),
  },

  image: {
    height: verticleScale(100),
    width: horizontalScale(40),
    marginLeft: horizontalScale(20),
  },

  textContainer: {
    flex: 1,
    justifyContent: 'center',
  },

  modalSuccessText: {
    fontSize: moderateScale(18),
    color: Colors.dark,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginRight: horizontalScale(50),
  },
  hrLine: {
    borderBottomWidth: 2,
    marginTop: verticleScale(30),
    marginHorizontal: 0,
  },
  modalText: {
    fontWeight: 'bold',
    color: Colors.dark,
    fontSize: moderateScale(16),
  },
  balanceView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: horizontalScale(-10),
    marginTop: verticleScale(20),
  },
  modalBalanceText: {
    alignSelf: 'center',
    fontWeight: '500',
    fontSize: moderateScale(14),
  },
  columnView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: verticleScale(30),
    marginHorizontal: horizontalScale(-20),
  },
  center: {
    alignItems: 'center',
  },
  bottomSpace: {
    marginBottom: verticleScale(50),
  },
  buttonView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  commonStylesButton: {
    backgroundColor: Colors.dark,
    width: '46%',
    padding: moderateScale(8),
    marginTop: verticleScale(20),
    borderRadius: moderateScale(10),
  },
  buttonText: {
    color: Colors.light,
    alignSelf: 'center',
    fontWeight: '500',
    fontSize: moderateScale(15),
  },
});

export default styles;
