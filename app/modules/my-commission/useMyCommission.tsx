import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Routes } from '../../constants';

const useMyCommission = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const navigateProvider = (name: string) => {
    switch (name) {
      case 'Mobile':
        navigation.navigate(Routes.Mobile);
    }
  };
  return {
    navigateProvider,
  };
};

export default useMyCommission;
