import { useState } from 'react';
import { Keyboard, ToastAndroid } from 'react-native';
import { ScreenStrings } from '../../../constants';

const usePanCard = () => {
  const [dropDownVisible, setDropDownVisible] = useState<boolean>(false);
  const [count, setCount] = useState<number>(0);
  const [psaText, setPsaText] = useState<string>('');
  const quantity = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];
  const toggleDropDown = () => {
    setDropDownVisible(!dropDownVisible);
    Keyboard.dismiss();
  };
  const setQuantity = (item: number) => {
    setCount(item);
    setDropDownVisible(false);
  };

  const validate = () => {
    if (!psaText || psaText.trim() === '') {
      return ToastAndroid.show(ScreenStrings.noUserId, ToastAndroid.SHORT);
    }
    if (!count) {
      return ToastAndroid.show(ScreenStrings.noQuantity, ToastAndroid.SHORT);
    }
    return true;
  };
  const submit = () => {
    if (validate()) {
      console.log('submit');
    }
  };
  return {
    setDropDownVisible,
    dropDownVisible,
    toggleDropDown,
    quantity,
    count,
    setCount,
    setQuantity,
    submit,
    psaText,
    setPsaText,
  };
};

export default usePanCard;
