import { DrawerNavigationProp } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../types';
import { useState } from 'react';

const useHomeHeader = () => {
  const [popup, setPopup] = useState(false);
  const navigation = useNavigation<DrawerNavigationProp<RootStackParamList>>();
  const togglePopup = () => {
    setPopup(!popup);
  };
  return {
    navigation,
    popup,
    togglePopup,
    setPopup
  };
};

export default useHomeHeader;
