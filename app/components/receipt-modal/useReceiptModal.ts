import { useState } from 'react';
import { ToastAndroid } from 'react-native';
import { ScreenStrings } from '../../constants';

const useReceiptModal = () => {
  const [isDisputeVisisble, setIsDisputeVisible] = useState<boolean>(false);
  const [isReason, setIsReason] = useState<boolean>(false);
  const [selectedReason, setSelectedReason] = useState<string>('Choose Reason');

  const toggleDispute = () => {
    setIsDisputeVisible(!isDisputeVisisble);
    setSelectedReason('Choose Reason');
    setIsReason(false);
  };
  const toggleReason = () => {
    setIsReason(!isReason);
  };

  const setReason = (reason: string) => {
    setSelectedReason(reason);
    setIsReason(false);
  };
  const validate = () => {
    if (selectedReason === 'Choose Reason') {
      return ToastAndroid.show(
        ScreenStrings.reasonNotSelected,
        ToastAndroid.SHORT,
      );
    }
    return true;
  };

  const submit = () => {
    if (validate()) {
      console.log('submit');
    }
  };

  return {
    isDisputeVisisble,
    toggleDispute,
    isReason,
    toggleReason,
    selectedReason,
    setSelectedReason,
    setReason,
    submit,
  };
};

export default useReceiptModal;
