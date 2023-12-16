import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Routes } from '../../../constants';

const useMoveToBank = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const navigateBeneficiary = () => {
    navigation.push(Routes.AddBeneficiary);
  };

  return{
    navigateBeneficiary
  }
};

export default useMoveToBank;
