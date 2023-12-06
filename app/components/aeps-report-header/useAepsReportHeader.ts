import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';

const useAepsReportHeader = () => {
  const [isSearch, setIsSearch] = useState<boolean>(false);

  const navigation = useNavigation();
  const toggleSearchbar = () => {
    setIsSearch(!isSearch);
  };
  return {
    navigation,
    toggleSearchbar,
    isSearch
  };
};

export default useAepsReportHeader;
