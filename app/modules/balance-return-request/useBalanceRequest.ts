import { useState } from 'react';
import { ScreenStrings } from '../../constants';
import { ToastAndroid } from 'react-native';

const useBalanceRequest = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isStatusVisible, setStatusVisible] = useState<boolean>(false);
  const [selectedStatus, setselectedStatus] = useState<string>(
    ScreenStrings.pending,
  );
  const [password, setPassword] = useState<string>('');
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
    setStatusVisible(false);
    setselectedStatus('');
  };

  const toggleStatusVisibility = () => {
    setStatusVisible(!isStatusVisible);
  };

  const setStatus = (status: string) => {
    setselectedStatus(status);
    setStatusVisible(false);
  };

  const validate = () => {
    if (!password || password.trim() === '') {
      return ToastAndroid.show(ScreenStrings.enterPassword, ToastAndroid.SHORT);
    }
    return true;
  };

  const proceed = () => {
    if (validate()) {
      console.log('submit');
    }
  };

  return {
    toggleVisibility,
    isVisible,
    toggleStatusVisibility,
    isStatusVisible,
    setStatus,
    selectedStatus,
    password,
    setPassword,
    proceed,
  };
};

export default useBalanceRequest;
