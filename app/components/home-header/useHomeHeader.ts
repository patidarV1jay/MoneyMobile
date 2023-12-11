import { DrawerNavigationProp } from '@react-navigation/drawer';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { Routes } from '../../constants';

const useHomeHeader = () => {
  const [popup, setPopup] = useState(false);
  const navigation = useNavigation<DrawerNavigationProp<ParamListBase>>();
  const navigateProfile = () => {
    setPopup(false)
    navigation.navigate(Routes.ProfileStack, { screen: Routes.Profile });
  };
  const togglePopup = () => {
    setPopup(!popup);
  };
  return {
    navigation,
    popup,
    togglePopup,
    setPopup,
    navigateProfile,
  };
};

export default useHomeHeader;
