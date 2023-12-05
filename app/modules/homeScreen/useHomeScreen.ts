import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';
import { Routes } from '../../constants';
import { useAppSelector } from '../../redux';

const useHomeScreen = () => {
  const { isSuccess } = useAppSelector(state => state.signin);
  const navigation = useNavigation<NavigationProp<ParamListBase>>();
  const navigateService = (name: String) => {
    switch (name) {
      case 'Mobile':
        navigation.navigate(Routes.ProviderStack, {
          screen: Routes.MobileProvider,
        });
        break;

      case 'DTH':
        navigation.navigate(Routes.DthProvider);
        break;

      case 'Postpaid':
        navigation.navigate(Routes.PostpaidProvider);
        break;

      case 'Electricity':
        navigation.navigate(Routes.ElectricityProvider);
        break;

      case 'Money Transfer 1':
        navigation.navigate(Routes.MoneyTransfer1);
        break;

      case 'PAN Card':
        navigation.navigate(Routes.PanCard);
        break;

      case 'Micro ATM':
        navigation.navigate(Routes.MicroAtm);
        break;
      
      case "AEPS":
        navigation.navigate(Routes.AepsStack, {screen: Routes.Aeps})
        break;
    }
  };
  return {
    isSuccess,
    navigateService,
    navigation,
  };
};

export default useHomeScreen;
