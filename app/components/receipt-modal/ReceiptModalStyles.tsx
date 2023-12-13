import { StyleSheet } from 'react-native';
import {
  verticleScale,
  moderateScale,
  horizontalScale,
  Colors,
} from '../../theme';

const styles = StyleSheet.create({
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
  disputeText: {
    fontSize: moderateScale(18),
    color: Colors.dark,
    fontWeight: '600',
    marginBottom: verticleScale(15)
  },
  inputView: {
    borderWidth: 1,
    padding: moderateScale(8),
    marginBottom: verticleScale(20)
  },
  text: {
    fontSize: moderateScale(16),
    fontWeight: '500'
  },
  headerText: {
    fontSize: moderateScale(14),
    marginBottom: verticleScale(5),
  },
  disputeContainer: {
    padding: moderateScale(10),
    paddingHorizontal: horizontalScale(15),
    height: verticleScale(860)
  },
  reasonView:{
    borderWidth:1,
    padding: moderateScale(8),
    marginVertical: verticleScale(6),
    marginBottom: verticleScale(10)
  },
  enterMessageView:{
    borderWidth:1,
    padding: moderateScale(5),
    color:Colors.dark,
    fontWeight:'500'
  },
  messageText:{
    fontWeight:'400',
    color: Colors.dark
  },
});

export default styles;
