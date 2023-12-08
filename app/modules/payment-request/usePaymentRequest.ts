import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Routes } from '../../constants';

const usePaymentRequest = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  const navigateBankDetails = () => {
    navigation.navigate(Routes.BankDetails);
  };
  const navigateFundRequest = () => {
    navigation.navigate(Routes.FundRequest);
  };
  const navigateFundRequestReport = () => {
    navigation.navigate(Routes.FundRequestReport);
  };
  return {
    navigateBankDetails,
    navigateFundRequest,
    navigateFundRequestReport,
  };
};

export default usePaymentRequest;
