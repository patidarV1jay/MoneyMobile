import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Routes } from '../../../constants';

const useProfileScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  const navigatePasswordChange = () => {
    navigation.navigate(Routes.ChangePassword);
  };

  const navigateKyc = () => {
    navigation.navigate(Routes.Kyc);
  };

  const navigatePersonalInfo = () => {
    navigation.navigate(Routes.PersonalInformation);
  };

  const navigateAddressDetails = () => {
    navigation.navigate(Routes.AddressDetails);
  };
  return {
    navigation,
    navigatePasswordChange,
    navigateKyc,
    navigatePersonalInfo,
    navigateAddressDetails,
  };
};

export default useProfileScreen;
