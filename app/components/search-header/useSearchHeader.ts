import { useNavigation } from '@react-navigation/native';

const useSearchHeader = () => {
  const navigation = useNavigation();
  
  return {
    navigation,
  };
};

export default useSearchHeader;
