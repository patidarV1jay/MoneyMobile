import { useAppSelector } from '../../redux';
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';

const useHomeScreen = () => {
  const { isSuccess } = useAppSelector(state => state.signin);
  const navigation = useNavigation<NavigationProp<ParamListBase>>();
  const navigateService = () => {

  };
  return {
    isSuccess,
    navigateService,
    navigation
  };
};

export default useHomeScreen;
