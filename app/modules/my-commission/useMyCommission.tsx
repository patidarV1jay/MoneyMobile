import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ImageList } from '../../constants';

const useMyCommission = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const navigateProvider = (name: string) => {
    ImageList.forEach(value => {
      name === value.name && navigation.navigate(value.name);
    });
  };
  return {
    navigateProvider,
  };
};

export default useMyCommission;
