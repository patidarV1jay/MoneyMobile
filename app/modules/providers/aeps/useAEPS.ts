import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Routes } from '../../../constants';

const useAEPS = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const navigateAgentOnBoard = () => {
    navigation.navigate(Routes.AgentOnBoard);
  };
  const navigateAepsLedgerReport = () => {
    navigation.navigate(Routes.AepsLedgerReport);
  };
  return {
    navigateAgentOnBoard,
    navigateAepsLedgerReport,
  };
};

export default useAEPS;
