import { DrawerNavigationProp } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../types';

const useHomeHeader = () => {
  const navigation = useNavigation<DrawerNavigationProp<RootStackParamList>>();
  return {
    navigation,
  };
};

export default useHomeHeader;
