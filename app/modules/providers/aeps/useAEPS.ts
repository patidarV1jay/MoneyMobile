import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Routes } from '../../../constants';

interface Args {
  name: string;
}

const useAEPS = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  const navigateAgentOnBoard = () => {
    navigation.navigate(Routes.AgentOnBoard);
  };

  const navigateAepsLedgerReport = () => {
    navigation.navigate(Routes.AepsLedgerReport);
  };

  const navigateAepsReport = () => {
    navigation.navigate(Routes.AepsLedgerReport);
  };

  const navigateBankOperations = (name: string) => {
    switch (name) {
      case 'Enquiry':
        navigation.navigate(Routes.BalanceEnquiry);
        break;
      case 'Cash Withdrawal':
        break;
      case 'Aadhaar Pay':
        break;
      case 'Mini Statement':
        break;
    }
  };
  return {
    navigateAgentOnBoard,
    navigateAepsLedgerReport,
    navigateAepsReport,
    navigateBankOperations,
  };
};

export default useAEPS;
