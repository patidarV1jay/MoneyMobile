import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Routes } from '../../../constants';

const useMobileProvider = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const navigateProviderDetails = () => {
    navigation.navigate(Routes.ProviderDetails);
  };
  return {
    navigation,
    navigateProviderDetails,
  };
};

export default useMobileProvider;
