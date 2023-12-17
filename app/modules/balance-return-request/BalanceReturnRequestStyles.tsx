import { StyleSheet } from 'react-native';
import {
  Colors,
  horizontalScale,
  moderateScale,
  verticleScale,
} from '../../theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.headerColor,
  },
  contentContainer: {
    margin: moderateScale(10),
  },
  textRequestedBy: {
    fontWeight: 'bold',
    color: Colors.light,
    fontSize: moderateScale(14),
    marginBottom: verticleScale(10),
  },
  text: {
    color: Colors.light,
    marginVertical: verticleScale(10),
  },
  pending: {
    color: Colors.red,
    fontWeight: '500',
    marginTop: verticleScale(5),
  },
  buttonApprove: {
    backgroundColor: Colors.dark,
    padding: moderateScale(12),
    paddingHorizontal: horizontalScale(18),
    borderRadius: moderateScale(8),
  },
  pendingnButtonView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  approveText: {
    color: Colors.light,
    fontWeight: '500',
    textTransform: 'uppercase',
    letterSpacing: 1,
    fontSize: moderateScale(14),
  },
  modalContainer: {
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
    backgroundColor: Colors.opaque,
  },
  modalContentContainer: {
    height: verticleScale(650),
    width: '90%',
    backgroundColor: Colors.gray,
    borderRadius: moderateScale(5),
    paddingLeft: moderateScale(8),
    paddingTop: verticleScale(10),
  },
  buttonView: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: verticleScale(10),
    flex: 1,
    alignSelf: 'center',
    justifyContent: 'space-evenly',
  },
  commonStylesButton: {
    backgroundColor: Colors.dark,
    padding: moderateScale(12),
    paddingHorizontal: horizontalScale(20),
    width: '49%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: moderateScale(5),
  },
  buttonText: {
    color: 'white',
    fontSize: moderateScale(16),
    textTransform: 'uppercase',
    letterSpacing: horizontalScale(1),
    fontWeight: '500',
  },
  statusText: {
    fontWeight: 'bold',
    fontSize: moderateScale(16),
    color: Colors.dark,
  },
  inputView: {
    marginTop: verticleScale(20),
  },
  statusInput: {
    borderWidth: 1,
    marginRight: horizontalScale(5),
    borderRadius: moderateScale(5),
    borderColor: Colors.dark,
    marginBottom: verticleScale(10),
    paddingLeft: horizontalScale(5),
    fontWeight: '500',
    color: Colors.dark,
    fontSize: moderateScale(15),
    height: verticleScale(95),
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
  error: {
    color: 'red',
    marginTop: 10,
  },
  status: {
    color: Colors.light,
    fontWeight: '500',
    fontSize: moderateScale(15),
    padding: moderateScale(8),
  },
  dropdown: {
    backgroundColor: Colors.lightGray,
    position: 'absolute',
    top: verticleScale(92),
    padding: moderateScale(10),
    width: '50%',
    borderRadius: moderateScale(5),
  },
  centeredText: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: horizontalScale(5),
  },
  selectedStatus: {
    fontWeight: '500',
    color: Colors.dark,
    fontSize: moderateScale(15),
  },
  zIndex: {
    zIndex: 1,
  },
});

export default styles;
